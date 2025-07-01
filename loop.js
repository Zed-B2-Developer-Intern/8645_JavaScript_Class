for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

const arr = [2, 5, 6, 8, 12, 1, 4, 7]

for (let i in arr) {                                //assigns the index
    console.log(arr[i])                             
}

for (let i of arr) {                                //assigns the value
    console.log(i)
}

let i = 10

while(i > 0) {              //do the check and then execute statements
    console.log(i)
    i--
}

let j = 10
do {                        //do the statement first then checks conditions
    console.log(i)
    j--
} while(j > 0)