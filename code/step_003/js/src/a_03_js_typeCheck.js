'use strict'
// a_03_js_typwCheck.js

let num = 10;
let likeNum = '10';

let checkType;

checkType = typeof(num);
console.log(num +':' + checkType);

checkType = typeof likeNum;
console.log(likeNum + ':' + checkType);

let bool = true;
checkType = typeof(bool)
console.log(bool + ':' + checkType);

let check = 0 !== '0';
console.log(bool);

let num2;
console.log(!!num2);

console.clear()

//----------------------------------------------
/*
let confirmText  = '나이를 입력하세요.';
let inputMessage = prompt(confirmText);
let covertNumber = parseInt(inputMessage)
console.log(covertNumber)

if(!!convertNumber){
  console.log('입력한 숫자는 0이 아닌숫자')
}

if(convertNumber < 20 ){
  console.log('현재 나이는 20세 이하');
}
*/

//-------------------------------------------------

let variable;
checkType = typeof variable;
console.log(checkType);
checkType = undefined;
console.log(checkType);

let nothing = 10;
console.log(nothing);
nothing = null;
console.log(nothing);

checkType = typeof nothing;
console.log(checkType)

// #wrap{width:100px; height:100px;}
// <div class="box" title="hi"></div>
// null = object

// JS 형타입 / 자료구조
/*
원시형태 (기본형) : 숫자(number),문자(string),논리(boolean),undefined, null, NaN , bigInt, symbol
특수형태 : object(object, array), function
*/

let ch = NaN;
checkType = typeof ch;
console.log(checkType)  //숫자로 뜬다

//-------------------------------------------------
console.clear();
// Object - > Object
//객체형태
let obj = {'apple':'red' ,'banana':'yellow', 'grape':'purple' ,'파인 애플':'갈색'};
console.log(obj);
console.log(obj.apple);
console.log(obj['파인 애플']);

//배열형태
let arr = ['apple', 'banana', 'grape', '파인 애플']; //중가로{}는 무조건 값이 있어야한다 값이 없을때는 대가로[]로 표현
console.log(arr);
console.log(arr[0]);

let gndlist = [
  {'name' : 'about us' , 'href' : '#'},
  {'name' : 'product' , 'href' : '#'}, 
  {'name' : 'gallery' , 'href' : '#'}, 
  {'name' : 'notice' , 'href' : '#'}, 
  {'name' : 'event' , 'href' : '#'}, 
  {'name' : 'sns' , 'href' : '#'} 

];

for(let i=0;i < gndlist.length; i = i + 1){
//console.log(arr[i])
console.log(gndlist[i].name);
}


// let data = ['pen', 'cup' , 'mic']; // //data[2]
// let data2 = {'pen':'red', 'cup' : 'white', 'mic': 'black'}; 
  //data2['mic'] || data2.mic

// let data3 = [
//   {'pen':'red', 'cup' : 'white', 'mic': 'black'}, 
//   {'pen':'red', 'cup' : 'white', 'mic': 'gray'},
//   {'pen':'red', 'cup' : 'white', 'mic': 'black'}
// ];
// //data3[2].mic
// //data3[1].[mic]