'use strict';
// /a_06_js_grammer.js

// 문법 : 조건문, 반목문
// - 조건문 : 단수분기(if), 다수분기(swicth)

// - 반복문 : 잘안쓰는거(while), 선행후 순환(do-while), 자주사용(for),
//알아서자동수행(forEach) - 주로 배열형식, for-in - 객체순환

let food = '울면';

if(food === '자장면'){
  console.log('중국집 전화번호 : 0000');
}else if(food === '피자') {
  console.log('피자집 전화번호 : 1111');
}else if(food === '갈비탕'){
  console.log('갈비탕 전화번호 : 2222');
}else{ console.log('물 드세요!!!');
}

let result;
switch (food){
  case '자장면': result='중국집 전화번호 : 0000'; break;
  case '피자'  : result='피자집 전화번호 : 1111'; break;
  case '갈비탕': result='갈비탕 전화번호 : 2222'; break;
  default : result = '물';
}
console.log( result);

result = ''; //언급 초기화
let bank = 0;
switch (bank){
  case 0 : result = result + '입금 수행하겠습니다.'; break; 
  case 1 : result += '송금 수행하겠습니다.'; break;
  case 2 : result += '계좌 삭제하겠습니다.'; break;
  case 3 : result += '블랙리스트 등극.'; break;
  default : result += '누구신지?';
}
console.log( result)


//----------------------------------------------------------
console.clear()
let link = './content.html';
let linkText = 'js base';
const h1 = document.querySelector('h1');
//h1.innerHTML = '<a href="'+ link + '">'+ linkText + '</a>';
//h1.innerHTML = "<a href=\""+ link + "\">" + linkText + "</a>";
h1.innerHTML = `<a href="${link}">${linkText}</a>`; //인터폴레이션 기법

//----------------------------------------------------------
//var areaEl = document.getAttribute('class', 'area'); //쓸일없음.
//const areaEl = document.getElementsByClassName('area')[0];

// 시나리오 : 
//li를 이벤트발생(클릭)했을때, 해당 순서에 의한 기능 수행
// 1. li는 복수형태이기 때문에 여러개중의 하나를 클릭한다 라는 인식
// 2. li를 클릭하는 순ㄱ산 여러개중의 하나를 순번과 함께 인식
const areaEl = document.querySelector('.area');
const areaUlEl = areaEl.querySelector('ul');
const areaListEl = areaUlEl.querySelectorAll('li');
const relEl = areaEl.querySelector('.result');

areaListEl.forEach(function(it, index){
  
  it.addEventListener('click', function(){
    let num = index;
    let product;
    switch(num){
      case 0: product ='아이스아메리카노'; break;
      case 1: product ='슬러시'; break;
      case 2: product ='쿠키';  break;
      case 3: product ='맥주'; break;
      default:product='기부되었습니다.';
    }
    relEl.innerText = product;
  });
});


//-------------------------------------------------------------------