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
    function createpost(post){
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                posts.push(post);
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject('errors omething went wrong')
            }
        },2000);
        })
    }

    createpost({title:"post3" , body:"namaste world"}).then(getpost).catch(err=>console.log(err));