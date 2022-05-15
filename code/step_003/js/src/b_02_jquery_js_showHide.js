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



//---------------------------------------------------------------
//fadeIn, fadeOut
(function(){
  //BtnDt를 이벤트발생(클릭)시, dd를 부드럽게 fade처리로 나타나게 만들기.

  //변수 영역 ---------------------------------------
  const jsBtn = jsArea.querySelector('.btn_02');
  const BtnDt = jsBtn.querySelector('dt');
  const BtnDd = jsBtn.querySelector('dd');
  let opacityValue = 0;
  let timed = 100;
  let PERMISSION = true;

  //이벤트 영역 -------------------------------------
  BtnDt.addEventListener('click',function(event){
    event.preventDefault();
    if(PERMISSION){
      PERMISSION =false;
    
      const DdDisplay = window.getComputedStyle(BtnDd).display === 'none'
      if(DdDisplay){
        BtnDd.style.display = 'block';
        BtnDd.style.opacity = opacityValue
        let runningInterval = setInterval (function(){
          if (opacityValue < 100){
            opacityValue += 1;
            BtnDd.style.opacity = opacityValue/100;
            console.log(opacityValue);
          }else{
            clearInterval(runningInterval);
            PERMISSION = true;
            
          }
        },timed/100);

      
      }else{

        let runningInterval = setInterval(function(){
          
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
  const ddFinalHeight = 200;
  let PERMISSION = true;
  let timed = 100;
  let ddHeight = 0;


// 이벤트 수행
  BtnDt.addEventListener('click',function(event){
    event.preventDefault();
    if(PERMISSION){
      PERMISSION = false;
   
      const displayEl =  window.getComputedStyle(BtnDd).display  === 'none';
      if(displayEl){
        BtnDd.style.display = 'block';
        BtnDd.style.height = ddHeight;
        BtnDd.style.overflow = 'hidden'
        
        let runningInterval = setInterval(()=>{
          ddHeight += 1;
          BtnDd.style.height= ddHeight + 'px';

          if(ddFinalHeight > ddHeight){

          }else{//그렇지 않은 상황일때는
          ddHeight = ddFinalHeight;
          clearInterval(runningInterval);
          PERMISSION = true;
          
          }

        },timed/100);

      }else{

        let runningInterval = setInterval(() =>{
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


  
      }



   } //(PERMISSION)
  });//  BtnDt.addEventListener('click')
})(); 






  // ==============================================
  // html문서의 인라인 속성값을 가져올때 사용
  // console.log(Btn01Dd.style.display); 
  
  // css문서에서 작성한 속성값을 가져올때 사용
  // console.log(window.getComputedStyle(Btn01Dd).display);



