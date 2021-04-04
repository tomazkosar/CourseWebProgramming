var myCallback = function () {
  console.log("1 seconds later...");
};
setTimeout(myCallback, 1000);

setTimeout(function () {
  console.log("2 seconds later...");
}, 2000);

setTimeout(() => {
  console.log("3 seconds later...");
}, 3000);


