console.log("Running using ubuntu terminal");
function test() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("In promise");
    }, 5000);
  });
}
async function testcall() {
  const p = await test();
  console.log(p);
  console.log("Promise executed");
}
testcall();
let w = 0;
const s = setInterval(function () {
  w = w + 1;
  console.log(w);
  if (w == 10) {
    clearInterval(s);
  }
}, 1000);
