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


Promise.race([p1, p2, P3, p4]).finally(()=>{
    console.log("Hello Finally in promise.race")
}).then((data)=>{
    console.log(`Hello Then in promise.race ${data} : ${typeof data}`)
}).catch((error)=>{
    console.log("Error from promise.all");
})

Promise.race([p1, p2, P3, p5]).finally(()=>{
    console.log("Hello Finally in promise.race")
}).then((data)=>{
    console.log(`Hello Then in promise.race Rejection ${data} : ${typeof data}`)
}).catch((error)=>{
    console.log(`Error from promise.all ${error} ${typeof error}`);
})

/**
 * Promie.race will send value of first settled promise.
 * If any promise fails before settle then return result of first failed promise.
 */