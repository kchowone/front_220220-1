// c_01_js_slideBanner.js
(function(){
  // ====================================
  //시나리오
  // 1~2줄짜리 설명
  // 버튼 클릭시 원하는 화면이 가로로 이동하여 배치되게 제작

  
  // 상세 시나리오
  // 1. 다음버튼 클릭
  // 2. 이전버튼 클릭
  // 3. 인디케이터 선택
  // 4. 버튼기능 공유
  // 5. 처음/마지막에서 자연스럽게 이동
  // 6. 일정시간마다 수행
  // 7. 외부데이터 불러와서 적용

  
  
  //slide banner
//변수 =====================================================
  const viewBox = document.querySelector('#viewBox');

  const slideBtnArea = viewBox.querySelector('.slide_buttons');
  const slideNextBtn = slideBtnArea.querySelector('.next');
  const slidePrevBtn = slideBtnArea.querySelector('.prev');

  const indicatorList = viewBox.querySelector('.indicators > ul');
  const indicatorItems = indicatorList.querySelectorAll('li');

  const slideViewArea = viewBox.querySelector('.view_area');
  const slideViewAreaList = slideViewArea.querySelector('ul');



  // 기능수행 / 추가변수 --------------------------------------------------------
  const preSlideListItems = slideViewAreaList.querySelectorAll('li');
  const lastSlideItem = preSlideListItems[preSlideListItems.length-1].cloneNode(true); 
  //노드 복사하기 위한 함수 cloneNode / 해당 노드의 칠드런까지 가져올려면 (true)입력해야함
  slideViewAreaList.prepend(lastSlideItem)


  const slideViewItems = slideViewAreaList.querySelectorAll('li');
  

  let COUNT = 0;
  let PRECOUNT = COUNT; // 전의값을 미리 저장하기위해
  let slideLen = slideViewItems.length - 1;
  let ACTIONNAME = 'action';
  let PERMISSION = true;
  let TIMED = 600;
  let ANINONE = 'transition_none';

//함수 =====================================================
//이미지 이동
const fnUlMove  = (num)=>{
  if(PRECOUNT === 0  && num === slideLen-1){ //처음페이지에서 마지막페이지로 넘어가게
    slideViewAreaList.style.left = '100%';// 처음페이지로 가게 만들기
    setTimeout(()=>{
      slideViewAreaList.classList.add(ANINONE); // 애니메이션 없앤 클레스 추가
      slideViewAreaList.style.left = num * -100 + '%';
 
      setTimeout(()=>{
      PRECOUNT =COUNT;
      slideViewAreaList.classList.remove(ANINONE); // 애니메이션 없앤 클레스 제거
      },0)
    },TIMED)
  } else if( PRECOUNT === slideLen - 1 && num === 0 ){  
      slideViewAreaList.classList.add(ANINONE); // 애니메이션 없앤 클레스 추가
      slideViewAreaList.style.left = '100%'; // 처음페이지로 가게 만들기
      setTimeout(()=>{
        slideViewAreaList.classList.remove(ANINONE); // 애니메이션 없앤 클레스 제거
        slideViewAreaList.style.left = num * -100 + '%';
        setTimeout(()=>{
          PERMISSION = true;
        })
      },0)
    } else {
      slideViewAreaList.style.left = num * -100 + '%';
 
  }
  
  
}

// .action클래스 넣기(add)/빼기(remove)
const fnIndigatorCheck =(num)=>{
  // slideViewItems[num].classList.add(slideViewItems);
  indicatorItems.forEach((el,idx) => {
    num === idx ? el.classList.add(ACTIONNAME): 
    el.classList.remove(ACTIONNAME)
  })
}


// 6초 뒤에 허용되게
const fnTimedSet = ()=>{
  setTimeout(()=>{
    PERMISSION = true;
    PRECOUNT =COUNT;
  },TIMED)
}


  //다음버튼
const handlerNextClick = function(e){
    e.preventDefault();
    if( PERMISSION ){
      PERMISSION = false;  // 6초동안 막고나서
    PRECOUNT = COUNT; 
    (COUNT >= slideLen-1) ? COUNT = 0 :COUNT += 1; 
    fnUlMove(COUNT);
    fnIndigatorCheck(COUNT)
    fnTimedSet();
    }
  }

  //이전버튼
const handlerPrevClick = function(e){
  e.preventDefault();
  if( PERMISSION ){
    PERMISSION = false; // 6초동안 막고나서
    PRECOUNT = COUNT; 
  (COUNT <= 0) ? COUNT = slideLen-1 :  COUNT -= 1;
  fnUlMove(COUNT);
  fnIndigatorCheck(COUNT)
  fnTimedSet()
  }
}


 

// 이벤트  =====================================================
  // 다음/이전버큰 클릭
  slideNextBtn.addEventListener('click',handlerNextClick)
  slidePrevBtn.addEventListener('click',handlerPrevClick)

//인디케이터
  indicatorItems.forEach((el,idx)=>{
    el.addEventListener('click', function(e){
      if(PERMISSION){
        PERMISSION = false;
        PRECOUNT = COUNT; 
        COUNT = idx; // count와 idx 맞춰주기위해
        e.preventDefault();
        fnUlMove(idx);
        fnIndigatorCheck(idx)
        fnTimedSet();
      }
    })
  })





})()