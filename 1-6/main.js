let scores = [10,15,20,25]

let num = 0;
while (num < scores.length){
    if(scores[num] % 2 ===0){
        console.log(scores[num]+"は偶数です");
    }
    num++;
}


let car = {
    fuel:20.5,
    number:12345,
};

console.log("ガソリンは"+car.fuel+"です");
console.log("ナンバーは"+car.number+"です");