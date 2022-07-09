import logo from './logo.svg';
import './App_source.scss';
// import는 src폴더
// 함수는 public폴더
function App() {
  const ballonimg = `url(${process.env.PUBLIC_URL}img/ballon-birthday-carnival-svgrepo-com.svg)`;
  return (
    <div className="App">
     <h1 className='blind_area'>
      <a href='#' style={{backgroundImage:`url(${logo})`}}>
        <span>commpany</span>
        </a>
        </h1>
       <div className='size'>
          <img src={`${process.env.PUBLIC_URL}img/ballon-birthday-carnival-svgrepo-com.svg`} alt='#' />
       </div> 

      {/* 함수내부안에서 불러오는 기준은 퍼블릭 */}
       <div className='size1'
          style={{backgroundImage :`url(${ballonimg})`}} >
       </div> 
    </div>
  );
}

export default App;
