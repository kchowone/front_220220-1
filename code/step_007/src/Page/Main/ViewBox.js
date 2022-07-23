import React, { useEffect, useRef, useState } from 'react'
// import { v4 as uuid} from 'uuid';
import uuid from 'react-uuid';

import ViewList from './ViewBox/ViewList'
import Buttons from './ViewBox/Buttons';
import Indicators from './ViewBox/Indicators';
import SlideWrapper from './ViewBox/SlideWrapper';


import ListData from './ViewBox/ListData';

import './ViewBox.scss';
// let ListData = {current:null};


function ViewBox() {

  const total = ListData.length -1;
  const timed = 1000;
  const [count,setCount] = useState(0);
  const [intervalState, setIntervalState] = useState(true); //PERMOSSION = true
  const moveSlide = useRef(null); // moveSlide.current = null



  useEffect( () => {
    console.log(count);
  },[count]);

  //다음버튼클릭
  const handlerNextClick = (e) =>{
   e && e.preventDefault();
    // count >= total ? setCount(0) : setCount(count + 1);
    setCount ( count >= total ? 0 : count + 1);
  }

  //이전버튼클릭
  const handlerPrevClick = (e) =>{
      console.log(e.target);
      e.preventDefault();
      // count <= 0 ? setCount(ListData.length -1;) : setCount(count - 1)
      setCount(count <= 0 ? total : count - 1);
    
  }

  const startSlide = ()=>{
    setIntervalState(true);
    if(moveSlide.current !== null){return}
    moveSlide.current = setInterval(() => handlerNextClick(), timed)
  }

 const stopSlide = () => {
    setIntervalState(false);
    if(moveSlide.current === null){return}
    clearInterval(moveSlide.current);
    moveSlide.current = null
  }

    useEffect ( () =>{
      intervalState && startSlide();
      return () => stopSlide();
    },[count, intervalState])



  return (
    <section id='viewBox' onMouseEnter={stopSlide} onMouseLeave={startSlide}>
      <h2 className='blind'>광고 영역</h2>

      <Buttons 
      nextEvent ={handlerNextClick}
      prevEvent={handlerPrevClick}  />

      <Indicators 
      ListData = {ListData} 
      count={count}
      total = {total}
      setCount = {setCount}
      />

      <SlideWrapper
      ListData = {ListData} 
      ViewList = {ViewList}
      count = {count}/>
     
    </section>
  )
}

export default ViewBox
