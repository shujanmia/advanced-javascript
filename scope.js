let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;

    if(result > 200){
        const mood = "happy";
        console.log(mood);
        return result;
    }
}

const output = sum(3, 7);
