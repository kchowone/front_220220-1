'use strict';
// a_03_cardList.js

/**
// 시나리오
 * 카드리스트 만들기
 * 1. html문서로 카드 리스트 형태 만들기. 
 * 2. 1개의 html문서를 js로 생성 or 여러개 card틀을 생성되게 만들기.
 * 3. 2번의 내용중 처리하지 않은 기능 생성
 * 4. 모든 코드를 한군데 넣지 말고 하나의 기능별로 함수화 처리해서 연결되게 생성.
 * 5. 하나의 기능안에 다시 복잡한 기능이 들어갈 경우 외부의 함수로 따로 처리해서 사용.
 * 6. 변수, 함수, 기능, 이벤트,추가변수/기능설정 내용별로 영역을 나눠서 작업.
*/

/**
 * this가 가지는 의미
 * 1. window
 * 2. 생성자함수를 사용하여 생성된 객체
 * 3. 이벤트 발생시 처리된 이벤트 주체 (단, 화살표 함수 사용시 this는 window)
 */


//  =====================================================================
// [cardList.html]  탭 기능처리내용 ====================================
// 변수 -------------------------------------------------------
const dataFile = '../data/drink_menu_list.json';

const elMenuItems = document.querySelector('.content__part__menu_type');
let elMenuUl = elMenuItems.querySelector('ul');
let elMenuList = elMenuUl.querySelectorAll('li');//리스트 여러개 잡기위해서 all

const elItems = document.querySelector('.content__area__menu__items');
elItems.innerHTML = '<ul></ul>';
let elItemsUl;

// 함수 -------------------------------------------------------
// 탭메뉴 리스트 기능











// 탭메뉴 항목 내용처리 기능
const fnMakeUl = function(){
  elItems.innerHTML = '<ul></ul>';
  elItemsUl =  elItems.querySelector('ul');
};


const fnCategoryFilter = function(cate, cardList){
  return cardList.filter((data, index)=>{
  return data.category === cate;
  });
};

const fnSpanInsert = function(data){
  let code = '';
  data.forEach((con)=>{
    let span = `<span>${con}</span>`;
    code += span;
  });
  return code;
};

const itemsCode = function(obj){
  console.log(obj);
  // const imagPath = '../img/${obj.path'+'/' + '${obj.filename}';
  const imagPath = `../img/${obj.path}/${obj.filename}`;
  const sliceData = obj.option.split(',');//split로 분리시키겠다 스페이스와 쉼표***
  const elMakeSpan = fnSpanInsert(sliceData);

  return `<div class="outline"><a href="#">
          <div class="image"style="${imagPath}"></div>
          <dl>
            <dt class="title">${obj.product}</dt>
            <dd class="narr">${obj.narr}</dd>
            <dd class="price">${obj.price}<dd>
            <dd class="option">${elMakeSpan}</dd>
          </dl></a>
          </div>`;
};

// li 하나의 함수를 생성 후 삽입
const fnMakeLi = function(obj){
  const makeLi = document.createElement('li');
  makeLi.innerHTML = itemsCode(obj);
  elItemsUl.append(makeLi);
};

// 함수기능 우선 수행 --------------------------------------------------------


// 기능 수행 -------------------------------------------------------
fetch(dataFile)
.then((response)=> response.json()) 
.then(function(data){
  // 탭 리스트
  let arrTabList = [];
  data.forEach(function(d){
    let check = arrTabList.includes(d.category);
    if(!check){
      arrTabList.push(d.category);
    }
  });
console.log(arrTabList);
elMenuItems.innerHTML = '<ul></ul>';
elMenuUl = elMenuItems.querySelector('ul');
let tabLi;
arrTabList.forEach((el,index)=>{
  tabLi = document.createElement('li');
  tabLi.innerHTML = `<button type="button">${arrTabList[index]}</button>`
  elMenuUl.append(tabLi);
  console.log(tabLi);
});


// let elMenuList = elMenuUl.querySelectorAll('li');

  //탭 내용처리
  const fnFilterContent = (menu) => {
    let m = menu || '커피류';
    const dataFilter = fnCategoryFilter(m, data);//console.log( dataFilter);

    // elItemsUl.remove(); //생겼다가 지우고 다시 생겨야 함.
    elItems.innerHTML = '<ul></ul>';
    elItemsUl = elItems.querySelector('ul');
   
    fnMakeUl();
    dataFilter.forEach(fnMakeLi);
  }

  fnFilterContent();

  elMenuList.forEach((el,index)=>{
    el.addEventListener('click',function(e){
      e.preventDefault();
      // console.log(e.target.innerText);//텍스트콘텐트와의 차이점 알아보기.
      const menuName = e.target.textContent;
      fnFilterContent(menuName);
    });
  
  });


 
})
.catch(console.log);


const arrList = [
  {name:'samsung', product:'product_01'},
  {name:'samsung', product:'product_02'},
  {name:'iphone', product:'product_01'},
  {name:'iphone', product:'product_02'},
  {name:'xaomi', product:'product_01'},
  {name:'lg', product:'product_01'},
  {name:'motorora', product:'product_01'},
  {name:'lg', product:'product_02'},
  {name:'motorora', product:'product_02'},
  {name:'motorora', product:'product_03'},
];

const arrList2 = [
  'samsung',
  'samsung',
  'iphone',
  'iphone',
  'xaomi',
  'lg',
  'motorora',
  'lg',
  'motorora',
  'motorora'
];
  let arrTabList = [];

  arrList.forEach((d,i)=>{
    let insertCheck = arrTabList.includes(d.name);
    if(!insertCheck){
      arrTabList.push(d.name);
    }
  });
  console.log(arrTabList);
