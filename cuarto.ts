function* idMaker() {
  let index = 0;
  while (index < 3) yield index++;
}
let gen = idMaker();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
