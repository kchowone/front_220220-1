'use strict';
//b_02_jquery_js_showHide.js
const jsArea = document.querySelector('.js_area');

// show ,hide
(function(){

const jsBtn01 = jsArea.querySelector('.btn_01');
const Btn01Dt = jsBtn01.querySelector('dt');
// const Btn01Dd = jsBtn01.querySelector('dd');
const Btn01Dd = Btn01Dt.nextElementSibling;
// const Btn01Dd = Btn01Dt.nextSibling;
// console.log(Btn01Dd);

//nextSibling은 공백이든, 텍스트든 가리지 않고 다음에 있는 것을 가져오게 되고,
//nextElementSibling 은 Element(요소)만

// event
// 1. Btn01Dt를 이벤트처리(클릭)시,Btn01Dd를 나타나게 만들기. 

Btn01Dt.addEventListener('click',function(event){
  event.preventDefault();
  const ddDisplay = window.getComputedStyle(Btn01Dd).display === 'none';
//window.getComputedStyle -> css값을 가져오게하는거.

  if(ddDisplay){
    Btn01Dd.style = 'display:block'
  }else{
    Btn01Dd.removeAttribute('style');
    // Btn01Dd.style ='display:none';
    // Btn01Dd.removeAttr('style');
  }
});
})();



//=========================================================
//fadeIn, fadeOut
(function(){
  //BtnDt를 이벤트발생(클릭)시, dd를 부드럽게 fade처리로 나타나게/사라지게 만들기.

  //변수 영역 ---------------------------------------
  const jsBtn = jsArea.querySelector('.btn_02');
  const BtnDt = jsBtn.querySelector('dt');
  const BtnDd = jsBtn.querySelector('dd');
  let opacityValue = 0;
  let timed = 100;
  let PERMISSION = true;
  let runningInterval;
  

  //페이드인 했을때-----------------------------
  const fnfadeIn = function(){
     runningInterval = setInterval (function(){
      if (opacityValue < 100){
        opacityValue += 1;
        BtnDd.style.opacity = opacityValue/100;
        console.log(opacityValue);
      }else{
        clearInterval(runningInterval);
        PERMISSION = true;
        
      }
    },timed/100);

  };

  // 페이드아웃 했을때 ------------------------
  const fnfadeOut = function(){
     runningInterval = setInterval(function(){
          
      if(opacityValue > 0){
        opacityValue -= 1;
        BtnDd.style.opacity = opacityValue/100;
        console.log(opacityValue);
      }else{
        clearInterval(runningInterval)
        opacityValue = 0;
        BtnDd.removeAttribute('style');
        PERMISSION = true;
      }
      
    },timed/100)
  };


  //이벤트 영역 -------------------------------------
  BtnDt.addEventListener('click',function(event){
    event.preventDefault();
    if(PERMISSION){
      PERMISSION =false;
    
      const DdDisplay = window.getComputedStyle(BtnDd).display === 'none'
      if(DdDisplay){
        BtnDd.style.display = 'block';
        BtnDd.style.opacity = opacityValue
        fnfadeIn();
      
      }else{

       fnfadeOut();

      }
  }// (PERMISSION)
  }); //BtnDt.addEventListener('click')


})();




// ==========================================

// slideUp/Down 버튼 만들기.
(function(){
  
  //변수영역
  const jsBtn = jsArea.querySelector('.btn_03');
  const BtnDt = jsBtn.querySelector('dt');
  const BtnDd = jsBtn.querySelector('dd');
  // const ddFinalHeight = 200;
  let PERMISSION = true;
  let timed = 100;
  let ddHeight = 0;
  let runningInterval;
  
  // 함수영역 --------------------------------------
  // 권한설정 및 BtnDd의 display상태 파악
  const fnCheck = function(){
    PERMISSION = false;
    return window.getComputedStyle(BtnDd).display  === 'none';
      
  };
  
  // fnBlockDd() : BtnDd 나타날경우에 기본 세팅
  const fnBlockDd = function(){
    BtnDd.style.display  = 'block';
    BtnDd.style.height   = ddHeight;
    BtnDd.style.overflow = 'hidden';
  };

  // 슬라이드 다운할때
  const fnSlideDown = function(){
    runningInterval = setInterval(()=>{
      ddHeight += 1;
      BtnDd.style.height= ddHeight + 'px';

      if(ddFinalHeight > ddHeight){

      }else{//그렇지 않은 상황일때는
      ddHeight = ddFinalHeight;
      clearInterval(runningInterval);
      PERMISSION = true;
      
      }

    },timed/100);
  };

  // 슬라이드업할때
  const fnSlideUp = function(){
    runningInterval = setInterval(() =>{
      if(ddHeight > 0){
        ddHeight -= 1;
        BtnDd.style.height= ddHeight + 'px';
        
      }else{
        ddHeight = 0;
        BtnDd.removeAttribute('style');// 속성을 지워라
        clearInterval(runningInterval);
        PERMISSION= true;
      }
    },timed/100);
  };




  //선택자.outerHeight(); -> jQuery에서 높이값 가져오기 기능을 구현.
  const fnGetHeight = function(){
    
    BtnDd.style.display = 'block';
   const size =  BtnDd.offsetHeight;
    BtnDd.removeAttribute('style');
    return size;
  };

const fnClickEvent = function(event){
  event.preventDefault();
  if(PERMISSION){
    const displayEl = fnCheck();      
    if(displayEl){
      fnBlockDd();
      fnSlideDown();
    }else{
      fnSlideUp();
    }
 } //(PERMISSION)
};


  //추가 변수 ----------------------------
  const ddFinalHeight = fnGetHeight();



// 이벤트 수행-----------------------------
  //BtnDt를 이벤트발생(클릭)시, dd를 부드럽게 slide처리로 나타나게/사라지게 만들기.
  BtnDt.addEventListener('click',fnClickEvent);


  })();//  BtnDt.addEventListener('click')


  // ==============================================
  // html문서의 인라인 속성값을 가져올때 사용
  // console.log(Btn01Dd.style.display); 
  
  // css문서에서 작성한 속성값을 가져올때 사용
  // console.log(window.getComputedStyle(Btn01Dd).display);


const wrap = document.querySelector('#wrap');
console.log(wrap.offsetHeight); //
console.log(wrap.clientHeight); // 

//clientHeight 는 요소의 내부 높이입니다. 패딩 값은 포함되며, 스크롤바, 테두리, 마진은 제외됩니다.
// offsetHeight 는 요소의 높이입니다. 패딩, 스크롤 바, 테두리(Border)가 포함됩니다. 마진은 제외됩니다.


// clientheight : 엘리먼트의 내부 높이를 픽셀
// 소수점이 포함된 값이 필요하다면, element.getBoundingClientRect()



