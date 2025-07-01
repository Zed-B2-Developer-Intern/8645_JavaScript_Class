//objects are just like a map with key-value pair

const obj = {
    name: "noor mohamed",
    age: 21,
    greet() {                                                   //implicitly keyed as 'greet'
        console.log("hello everyone");
    }
}

console.log(obj['name']);

obj.greet()