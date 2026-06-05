const express = require("express");
const { createClient } = require("redis");

const app = express();
const redisClient = createClient();

redisClient.on("error", (err) => console.log("Redis Error", err));

(async () => {
  await redisClient.connect();
})();

const store = new Map();
const Rate_Limit = 5;
const window_size = 60 * 1000;

function rateLimiter(req, res, next) {
  const userIp = req.ip;
  const currentTime = Date.now();

  if (!store.has(userIp)) {
    store.set(userIp, {
      count: 1,
      startTime: currentTime,
    });
    return next();
  }

  const data = store.get(userIp);
  const timeDiff = currentTime - data.startTime;

  if (timeDiff < window_size) {
    data.count++;
    if (data.count > Rate_Limit) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }
  } else {
    store.set(userIp, {
      count: 1,
      startTime: currentTime,
    });
  }

  next();
}

async function rateLimiterWithRedis(req, res, next) {
  try {
    const userIp = req.ip;

    const requests = await redisClient.incr(userIp);

    if (requests === 1) {
      await redisClient.expire(userIp, window_size);
    }

    if (requests > Rate_Limit) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    next();
  }
}

// app.use(rateLimiter);
app.use(rateLimiterWithRedis);

app.get("/", (req, res) => {
  res.status(200).json("Hello World");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
