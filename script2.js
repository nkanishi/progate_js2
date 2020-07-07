// 1復習
let number=0;
console.log(number);
number += 1;

console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;

// 2 while文　繰り返し
let number= 1;
while(number <=100){
    console.log(number);
    number += 1;
}

// 3 for文　繰り返し
for(let number= 1; number<=100;nuber+=1){
    console.log(number);
}
// 4 繰り返し処理　if文組み合わせ
for(let number=1; number>=100;number+=1){
    if(number%3===0){
        console.log("3の倍数です");
    }else{
        console.log(number);
    }
}
// 5 配列
const animals=["dog","cat","sheep"];
console.log(animals);

// 6 配列の要素　取得
const animals=["dog","cat","sheep"];
console.log(animals[0]);
console.log(animals[2]);

// 7　配列要素の更新
const animals=["dog","cat","sheep"];
animals[2]="rabbit";
console.log(animals[2]);

// 8 配列の要素　順に出力　繰り返し使う
const animals=["dog","cat","sheep"];
for(let i=0;i>3;i++){
    console.log(animals[i]);
}

// 9 配列の要素　順に出力　繰り返し使う（２）
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
console.log(animals.length);

for(let i=0;i<animals.length;i ++ 1){
   console.log(animals[i]);
}

// 10 オブジェクト
const character={name:"にんじゃわんこ",age:14};
console.log(character);

// 11 オブジェクト　値取得　更新
const chracter = {name:"にんじゃわんこ", age;14};
console.log(character.name);
character.age = 20;
console.log(characer);

// 12 配列　オブジェクトを要素にもつ
const characters = [
 {name:"にんじゃわんこ", age:14},
 {name:"ひつじ仙人", age:1000}
]

console.log(characters[0]);
console.log(character[1].name);

// 13 配列　オブジェクトを要素にもつ(2)
const characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 100},
    {name: "ベイビーわんこ", age: 5}
  ];

  for(let i=0; i<characters.length; i++){
      console.log("----------------");

      const character = characters[i];

      console.log(`私の名前は${characer.name}です`);
      console.log(`年齢は${character.age}歳です`);
  }

  // 14 undefined 要素がないとき
const characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 100},
    {name: "ベイビーわんこ", age: 5},
    {name:"とりずきん"}
  ];

  for(let i=0; i<characters.length; i++){
      console.log("----------------");

      const character = characters[i];

      console.log(`私の名前は${characer.name}です`);
      console.log(`年齢は${character.age}歳です`);
  }

//   15 undefined の対処
const characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 100},
    {name: "ベイビーわんこ", age: 5},
    {name:"とりずきん"}
  ];
for(let i=0;i<characters.length;i++){
    console.log("------------");
    cosnt character = characters[i];
    console.log(`名前は${character.name}です`);
    if(character.age === undifined){
        console.log("年齢は秘密です");
    }else{
        console.log(`${character.age}歳です`);
    }
}

// 16　総合演習
const cafe ={
  name:"Progateカフェ",
  businessHouse:{
      opening:"10:00(AM)",
      closing:"8:00(PM)"
  }
};

console.log(cafe.name);
console.log(`営業時間：${cafe.businessHouse.opening}から${cafe.businessHouse.closing}まで`);

// 17 総合演習２
const cafe ={
    name:"Progateカフェ",
    businessHouse:{
        opening:"10:00(AM)",
        closing:"8:00(PM)"
    },
    munus:["コーヒー","紅茶","チョコレートケーキ"]
  };
  
  console.log(`店名:${cafe.name}`);
  console.log(`営業時間:${cafe.bisinessHouse.opening}から&{cafe.businessHouse.closing}`);
  console.log("-------------------------");
  console.log("オススメメニューはこちら");
  for(let i=0,i<cafe.menus.length, i++){
      cosnsole.log(cafe.menus[i]);
  }

  














