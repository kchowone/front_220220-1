'use strict';
// a_12_async.js

let num = 0;
let timed = 1000;
// 5초 뒤에 num이라는 변수에 10을 더하기.
setTimeout(()=>{
  num += 10;
console.log('timeout:',num);
},timed*5);

num +=1;
console.log(num)
num +=2;
console.log(num)
num +=3;
console.log(num)
num +=4;
console.log(num)

// 1초마다 num변수에 3씩 더하고 40에 멈추겠다.
let setI = setInterval(()=>{
console.log('intreval:' , num +=3);
if(num >= 40){
  clearInterval(setI);
}
},timed);

// $.ajax({url:'/a.json', dataType: 'json'}).done(function(data))
// ES5 : new XMLHttpRequest() -> open -> send
// ES6 : fetch(), promise(), async/awatit - > IE에서는 그냥 안됨, axios()

let sample;
fetch('../js/data/mokato_01.json')
.then( (response) => { return response.json() })
.then( (data) => {
  const user1 = data.filter(function(arr, idx){
    return arr.first_name === 'Zulema'
  });
  return user1;
}).then((data) =>{
  console.log(data)
})



/* 위 줄인거
fetch('../js/data/mokato_01.json')
.then( (response) => { return response.json() })
.then( data => data.filter(arr => arr.id==2) )
.then(console.log)
*/

