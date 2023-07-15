// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
   let catNames = [...cats, "Broom"];
   return catNames;
}
function prependCat() {
    let nameCats = ["Arnold", ...cats];
    return nameCats;
}
function removeLastCat(){
    let copysOfCats = cats.slice(0,-1);
    return copysOfCats;
}
function removeFirstCat(){
    let catsOfCopys = cats.slice(1);
    return catsOfCopys;
}