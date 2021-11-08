let numbers = [2,5,12,13,15,18,22];

function isEven(num){
    let i = 0;
    while (i < num.length){
        if(num[i] % 2 === 0){
            console.log(num[i]+'は偶数です');
        }
        i++;
    }
}
isEven(numbers);

class Car{
    constructor(gas,number){
        this.gas = gas;
        this.number = number;
    }


    getNumGas(){
        console.log('ガソリンは'+this.gas+'です');
        console.log('ナンバーは'+this.number+'です');
    }
}

fujiwaraToufuten = new Car (30,1234);
fujiwaraToufuten.getNumGas();