'use strict';
//b_04_js_className.js

// (function(){})() 
{
  // const h = 'h1'
  // console.log(h);
}

{
  const wrap = document.getElementById('wrap');
  //getElementById :주어진 문자열과 일치하는 id 속성을 가진 요소
  // wrap.innerHTML = '<h1></h1>';
  const h1 = document.createElement('h1');
  h1.innerHTML = '<a href="#">text</a>';
  wrap.append(h1);

  const CLASSNAME1 = 'one';

  //jq : class 처리 - addClass, removeClass, hasClass
  //js : class 처리 - classList. [add , remove , contains]

  h1.addEventListener('mouseenter', function(e){
    e.preventDefault();

    const hasClass = h1.classList.contains(CLASSNAME1);
    if(!hasClass){  
      console.log('class이름 없음')
      h1.classList.add(CLASSNAME1);
    }else{
      h1.classList.remove(CLASSNAME1);
      console.log('class이름 있음')
    }
    

  });

  // h1.addEventListener('mouseleave', function(e){
  //   e.preventDefault();

   
  // });


}