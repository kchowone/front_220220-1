import {useEffect, useState} from 'react';
import axios from 'axios';
import {useInterval} from 'usehooks-ts';
import './App.css';

// useEffect( () => {/* 수행 */} ); -> 무조건 렌더링이 될때 마다 매번 수행
  // useEffect( () => {/* 수행 */}, [] ); -> 최초 한번만 수행
  // useEffect( () => {/* 수행 */}, [value] ); -> 최초 한번만 수행, value에 해당하는 값이 변할때마다 수행
  // useEffect( () => {/* 수행 */ return ()=> {/* 수행취소*/ }, [value] ); 
  //  -> 최초 한번만 수행, value에 해당하는 값이 변할때마다 수행, return이 존재하면 기본 수행되는 기능을 정리(삭제)


/**
 * useEffect의 사용목적
 * 1. useState의 기능을 이용하여 값이 변할때, 1차로 끝난것이 아닌 2~3차로 같이 변화를 거칠때 적용하기 위한
 * 2. 하나의 값이 변화를 일으킬때, 해당 변화를 감지하여 처리하는 경우
 * 3. 최초의 실행을 목적으로 사용하는데, 비동기처리로 수행할 때 
 * 
 * 
 * fetch(url).then(data=>return data.json()).then(data=>{기능 수행});
 */




function App(){
  // const imageList = ['002-koala.png','003-turtle.png','004-livestock.png','005-lion.png','006-fox.png'];
  // const url = './image/flaction/';
  // let url, imageList;
  const [url ,setUrl] = useState('');
  const [imageList, setImageList] = useState('');
  
  const path = "./data/image.json";  
  console.log(url , imageList);
  useEffect(()=>{
    axios(path).then(code =>{
      setUrl(code.data.url);
      setImageList(code.data.src);
      setCount(0);
    });

    axios(path).then(code => console.log(code.data));
  },[]);

  // useEffect(()=>{
  //   setImgSrc(url + imageList [count]);
  // },[count, url]);

  const [imgSrc, setImgSrc] = useState(url + imageList[0]);
  const [count,setCount] = useState('');


  const [user, setUser] = useState('');
  const [pw, setPw] = useState('');
  const [view, setView] = useState('password');

  const handlerInput = function(e){
    // console.log(e. target.value);
    setUser(e. target.value);
    // console.log(user);
  }

  const handlerPassword = function(e){
    setPw(e.target.value);
  }

  const handlerBtn = function(e){
    // e.target
    // view === false ? setView(true) ? setView(false);
    setView(view === 'password' ? 'text' : 'password');
  }


  const handlerView = ()=> setView('text');
  const handlerBlind = ()=> setView('password');
  


  // useEffect( ( ) => {console.log('user:',user);},[user]);
  // useEffect( ( ) => {console.log('pw:',pw);},[pw]);

  

  // useEffect(()=>{
  //   // 숫자 < 5 ? 0 : 숫자+1
  //   // 1초마다 imageList의 값에 따른 이미지가 변경되게 만들기 ( 무한으로 )
  // // 1. 0~5까지 숫자 카운트 -> count < imageList.length-1 ? count+1: 0 

  //   const countRun = setInterval (()=> {
  //     setCount(count < imageList.length-1 ? count+1 : 0);
  //     setImgSrc(url + imageList[count]);
  //   },1000);
  //   return ()=> clearInterval(countRun)
  // }, [count,imgSrc])
  
  useInterval(() => {
      setCount(count +  imageList.length-1 ? count+1 : 0);
      setImgSrc(url + imageList[count])
    },1000);



  useEffect(()=>setImgSrc(url + imageList[count]),[count])
  const hanelerImage =()=>setCount(count < imageList.length-1 ? count+1 : 0);

  

// ----------------------------------------------------------------
  

  return (
    <div className="App">
      <div className='formSet'>
        <p>{count}
        <img src={imgSrc} alt='임시 이미지 작성' />
        </p>
      <div className='btn'><button type='button' onClick={hanelerImage}>다음이미지</button></div>
      <label htmlFor="textInput">이름 : </label>
      <input type="text" onChange={handlerInput}
             id="textInput" name="text__Input"
             required placeholder="이름을 입력하세요." />
      </div>

      <div className='formSet'>
      <label htmlFor="pwInput">비밀번호 : </label>
      <input type={view} onChange={handlerPassword}
             onMouseEnter ={handlerView} onMouseLeave={handlerBlind}
             id="pwInput" name="pw__Input"
             required placeholder="비밀번호를 입력하세요." />

      {/* <button type="button" onClick={handlerBtn}>비번보기</button> */}
      {/* <button type="button" onMouseDown={handlerView} onMouseUp={handlerBlind}> 비번보기</button> */}
      </div>
      <p>입력한 ID:<span>{user}</span></p>
      <p>입력한 비번:<span>{pw}</span></p>
    </div>
  )


}

export default App;