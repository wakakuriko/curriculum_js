

class Human{
    constructor(name, height, weight, gender, age,){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.age = age;
    }

    walk(){
        console.log('歩きました');
    }

    selfIntroduction(){
        console.log('私は'+this.name+'です');
        console.log('年齢は'+this.age+'歳です');
    }
}

let yamada = new Human('yamada',170,60,'男',30);
let suzuki = new Human('suzuki',180,70,'男',35);
console.log(yamada);
console.log(suzuki.gender);

yamada.walk();
suzuki.selfIntroduction();

// 課題
class Taiyaki{
    constructor(content){
        this.content = content;
    }

    whatIsContent(){
        console.log('中身は'+this.content+'です');
    }

}



anko = new Taiyaki('あんこ')
anko.whatIsContent();