// Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
]
function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
    console.log(cats)
}
function destructivelyPrependCat (Bob){
    cats.unshift ("Bob")
    console.log(cats)
}
function destructivelyRemoveLastCat() {
    cats.pop()
    console.log(cats)
}
function destructivelyRemoveFirstCat() {
    cats.shift()
    console.log(cats)
}
function appendCat(name) {
    return [...cats, name]
}
function prependCat(name) {
    return [name, ...cats,]
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}
function removeFirstCat() {
    return cats.slice(-2)
}
function removeFirstCat() {
    return cats.slice(1)
}