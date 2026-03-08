function* idGenertor () {
  let id = 1;

  while(true){
    yield id++;
  }
}
const gen = idGenertor();

console.log(gen.next().value);
console.log(gen.next().value);