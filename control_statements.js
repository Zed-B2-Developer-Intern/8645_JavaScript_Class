const age = 21

function isEligibleForVoting(age) {
    if(typeof age !=  "number") {
        console.log("Age should be in number");
    }

    else if(age < 18) {
        console.log('Not Eligible')
    }

    else{
        console.log("Eligible");
    }
}

isEligibleForVoting("55")
isEligibleForVoting(12)
isEligibleForVoting(age)