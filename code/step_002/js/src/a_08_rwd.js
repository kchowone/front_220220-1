//한줄주석
//a_08_rwd.js
/* 여러줄 주석*/

const menu = document.querySelector('.mobile_menu');
//16px === 12pt === 100% === 1em === 1rem

const gnblist = document.querySelector('.gnb > ul')

//menu(버튼)을 클릭하면, gnblist를 나타나게 해라!!!
// 이벤트 : 기본상태에서 무언가 변화가 처리되는 모~~~든 것

menu.addEventListener("click", function(){
  gnblist.style.display = "flex";
})
