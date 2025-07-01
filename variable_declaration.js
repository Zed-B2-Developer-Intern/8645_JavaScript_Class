//'let' and 'const' are block scoped
//'var' is function scoped

function printSomething() {
    //var name                                      --> hoisted on the top of the function as it is function scoped
    try{
    {
        var name = "mohamed"
        let age = 19
    }

    console.log(`name: ${name}`)
    console.log(`age: ${age}`) //will throw reference error as age is defined with 'let' inside the block
    }
    catch(err) {
        console.log(err)
    }
}

printSomething()