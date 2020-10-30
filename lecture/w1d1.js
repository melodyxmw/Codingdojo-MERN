var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);

magicalUnicorns();
var magicalUnicorns = function(){
    console.log("Will it blend?");
}
console.log("Don't breathe this!");

const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false

console.log(myVar)