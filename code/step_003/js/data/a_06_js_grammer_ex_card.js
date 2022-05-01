'use strict';
// a_06_js_ex_card.js

console.log(cardData);


// 1: .card내부의 ul내부 뒤(append)에 li요소를 각각 삽입.
// 2: 생성, 삽입, 사용 역할을 하나의 역할처리해서 별도로 사용 
// 3: 각각의 내용수행 기능을 하나의 역할처리해서 별도로 사용

const elCard = document.querySelector('.card');
const elCardUl = elCard.querySelector('ul');
console.log(elCardUl);

const insertList = `
<a href="#">
<div class="image"></div>
<dl>
  <dt>title_01</dt>
  <dd>content Lorem ipsum dolor sit amet.</dd>
</dl>
</a>`


// js : 생성(createElement) - 내용삽입(append) - 사용

// let makeLi = document.createElement('li'); //생성
// makeLi.innerHTML = insertList; //삽입
// elCardUl.append(makeLi); //사용
//--------------------------------------------------
// 역할 처리
const fnMakeLi = function(list){ //()내부에 들어오는 이름을 변수명 list로 통칭 - 매개변수
  list.innerHTML = insertList; 
  elCardUl.append(list); 
};

const fnListInsert = function(el,i){
  let elLiDt = el.querySelector('dt');
  let elLiDd = el.querySelector('dd');
  let elLiLink = el.querySelector('a');
  let elLiimage = el.querySelector('.image');
  let srcimagePath = cardData[i].url + '/' + cardData[i].image;
  elLiDt.innerText = cardData[i].title;
  elLiDd.innerText = cardData[i].content;
  // elLiDt.setAttribute('href', cardData[i].href);
  elLiLink.href = cardData[i].href;
  elLiimage.style.backgroundImage = `url(${srcimagePath})`
};

//--------------------------------
let cardLen = cardData.length
for(let i = 0; i < cardLen; i+=1){
  let makeLi = document.createElement('li');
  fnMakeLi(makeLi);
  fnListInsert(makeLi,i);
}