let posts = [
  { title: "post1", body: "hello world" },
  { title: "post2", body: "hello universe" },
];
function getpost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 3000);
}
function createpost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 4000);
}

createpost({ title: "post3", body: "namaste world" }, getpost);
