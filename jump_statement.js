function printEven(arr) {
    for(let i in arr) {
        if(arr[i] % 2 != 0) {
            continue                   
        }
        else {
            console.log(arr[i]+ " ");
        }
    }
}

function isIncludes(arr, target) {
    let flag = false
    for(let i of arr) {
        if(i === target) {
            flag = true
            break                       
        }
    }
    return flag
}

function isIncludes2(arr, target) {
    for(let i of arr) {
        if(i === target) {
            return true               
        }
    }
    return false
}