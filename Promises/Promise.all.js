const p1 = new Promise((resolve, reject) => {
    try{
        setTimeout(()=>{
            resolve("P1");
        }, 5000);
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


Promise.all([p1, p2, P3, p4]).finally(()=>{
    console.log("Hello Finally in promise.all")
}).then((data)=>{
    console.log(`Hello Then in promise.all ${data} : ${typeof data}`)
}).catch((error)=>{
    console.log("Error from promise.all");
})

Promise.all([p1, p2, P3, p5]).finally(()=>{
    console.log("Hello Finally in promise.all")
}).then((data)=>{
    console.log(`Hello Then in promise.all ${data} : ${typeof data}`)
}).catch((error)=>{
    console.log(`Error from promise.all ${error} ${typeof error}`);
})

/**
 * Promise.all waits for all of the promises to finish
 * If any of the promise fails then Promise.all will throw error for all of the promises.
 */