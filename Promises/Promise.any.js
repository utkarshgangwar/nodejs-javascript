const p1 = new Promise((resolve, reject) => {
    try{
        setTimeout(()=>{
            resolve("P1");
        }, 2000);
    }catch(error){
        reject(error)
    }
});

const p2 = new Promise((resolve, reject) => {
    try{
        setTimeout(()=>{
            resolve("P2");
        }, 5000);
    }catch(error){
        reject(error)
    }
})

const P3 = new Promise((resolve, reject) => {
    try{
        setTimeout(()=>{
            resolve("P3");
        }, 5000);
    }catch(error){
        reject(error)
    }
})

const p4 = new Promise((resolve, reject) => {
    try{
        setTimeout(()=>{
            resolve("P4");
        }, 5000);
    }catch(error){
        reject(error)
    }
})

const p5 = new Promise((resolve, reject) => {
    try{
        setTimeout(()=>{
            reject("P5");
        }, 1000);
    }catch(error){
        reject(error)
    }
})

const f6 = new Promise((resolve, reject) => {
    try{
        setTimeout(()=>{
            reject("f6");
        }, 1000);
    }catch(error){
        reject(error)
    }
})


Promise.any([p1, p2, P3, p4]).finally(()=>{
    console.log("Hello Finally in promise.any")
}).then((data)=>{
    console.log(`Hello Then in promise.any ${data} : ${typeof data}`)
}).catch((error)=>{
    console.log("Error from promise.any");
})

Promise.any([p1, p2, P3, p5]).finally(()=>{
    console.log("Hello Finally in promise.any")
}).then((data)=>{
    console.log(`Hello Then in promise.any Rejection ${data} : ${typeof data}`)
}).catch((error)=>{
    console.log(`Error from promise.any ${error} ${typeof error}`);
})

Promise.any([p5, f6]).finally(()=>{
    console.log("Hello Finally in promise.any")
}).then((data)=>{
    console.log(`Hello Then in promise.any all failed ${data} : ${typeof data}`)
}).catch((error)=>{
    console.log(`Error from promise.any ${JSON.stringify(error)} ${typeof error}`);
})

/**
 * Promise.any waits for first success always
 * If all promises fails then returns aggregate error.
 */