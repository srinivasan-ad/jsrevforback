const fs = require("fs");
const data = "writing to test.txt :)";
fs.writeFile("test.txt", data, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Written to the  file test.txt !");
});
