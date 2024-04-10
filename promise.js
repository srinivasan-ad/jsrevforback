let posts = [
    {title: "post1" , body: "hello world"},
    {title: "post2" , body: "hello universe"}
    ]
    function getpost(){
        setTimeout(()=>{
        let output = '';
posts.forEach((post,index)=>{
    output += `<li>${post.title}</li>`
});
       document.body.innerHTML=output; },1000)
    }
    // function createpost(post){
    //     return new Promise((resolve,reject)=>{

    //         setTimeout(()=>{
    //             posts.push(post);
    //         let error = false;
    //         if(!error){
    //             resolve();
    //         }
    //         else{
    //             reject('errors omething went wrong')
    //         }
    //     },2000);
    //     })
    // }

    // createpost({title:"post3" , body:"namaste world"}).then(getpost).catch(err=>console.log(err));
    const promise1 = Promise.resolve("hello");
    const promise2 = 10;
    const promise3= new Promise((resolve,reject)=>
    // checking .then for reject 
    // setTimeout(reject,2000,'trying reject')    );
    setTimeout(resolve,2000,'World')    );
    // This is for using resolve and reject in .then instead of using a seperate catch block
    // Promise.all([promise1,promise2,promise3]).then((values)=>{console.log(values)},(error)=>{console.log(error)});
    Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values));
    

