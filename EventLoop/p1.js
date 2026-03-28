setTimeout(()=>{
    console.log("setTimeout 1");
},2000)

setTimeout(()=>{
    console.log("setTimeout 2");
},1000)

new Promise(()=>{
    try{
        console.log("Promise 1")
    }catch(error){
        console.log("Promise 1 error")
    }
});

setImmediate(()=>{
    console.log("setImmediate")   
})

console.log("Hello");