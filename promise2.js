function Promisetest(){
    return new Promise(function(resolve){
       setTimeout(function(){
        resolve("promise executed");
            },3000)

    })}
  
async function promiseasync(){
    const p = await Promisetest();
    console.log(p)
    console.log("after promise")
}
console.log("between promise")
promiseasync();