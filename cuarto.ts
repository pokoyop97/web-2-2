function getFirstName() {
  setTimeout(function() {
    gen.next("issac");
  }, 1000);
}
function getSecondName() {
  setTimeout(function() {
    gen.next("rosales");
  }, 1000);
}
function* sayHello() {
  var a = yield getFirstName();
  var b = yield getSecondName();
  console.log(a, b);
}
var gen = sayHello();
gen.next();
