import HeadBox from './components/HeadBox';
import ContentBox from './components/ContentBox';
import FootBox from './components/FootBox';
import './App.css';


// const App = function(){}
// // const App = ()=>{}
// function App(){}

function App() {
  return (
    <div className="App">
    <HeadBox />

    <ContentBox />
      
    <FootBox />
    
    </div>
  );
}



export default App;



// XML : 
// JSX : HTML을 태그처럼 사용는것
// 여러 속성의 이름이 js에서 겹치거나 혼동이 일어나면 X -> className, htmlfork
// html  문서를 js내부에 작성하며,최초의 요소는 하나여야하면 무조건 감싸줘야 한다 fragment></fragment>, <></>
// 요소형태 내부에서는 {}표시가 되어진 영역을 js코드를 사용하는 영역으로 인정.

