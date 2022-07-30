import React, { useEffect, useState } from "react";
import CardApp from "../Compponent/CardApp";
import CardUser from "../Compponent/CardUser";
import CardMore from "../Compponent/CardMore";
import CardLink from "../Compponent/CardLink";
import axios from 'axios';

function Main() {

  const [isDark, setisDark] = useState(true);
  const [photoJson , setPhotoJson] = useState(null);
  const [myUser, setMyUser] = useState(null);

  const cardStyle = {width: '100%', height:'auto', padding: '30px 0',
  backgroundColor: '#cff',
  display: 'flex' , justifyContent: 'center', gap: '40px', flexWrap:'wrap'};


  useEffect (()=>{ // name.first, name.last , picture.medium
    axios( 'https://randomuser.me/api/?results=10')
    .then(response => setPhotoJson(response.data.results));
  }, [])

  // useEffect(()=>{
  //   // myUser = [{id, name: {first, last}, image}]
  //   // setMyUser(
  //   //   photoJson.id,
  //   //   photoJson.name.first,
  //   //   photoJson.last,
  //   //   photoJson.picture.medium )

  //     // console.log(photoJson)
  // },[photoJson])

  // console.log( 'photoJson', photoJson);


  const userCode = photoJson && photoJson.map(
    (data , index)=> ({num :index,
       position:data.id.value,
       first : data.name.first,
       last : data.name.last,
       image : data.picture.large})
    )



  return (
  <div>
    {/* {Main /} */}
    <article id="main"> <h3>main title</h3></article>
    
    
    
    <article id="amaziing">
      <h3>amaziing dervice</h3>
      <p>Lorem ipsum dolor sit amet, <br />
      consectetur adipisicing elit. Ullam saepe</p>

      <div className="card_wrap" style={cardStyle}>

        {/* 카드유저 */}
        {/* {userCode && userCode.map(data =>
        <CardUser key = {data.num} bgImg={data.image} 
                  userName={data.first} 
                  userFamily={data.last}
                  userPosition={data.first} />
        )} */}

        {userCode && userCode.map((data) =>
          <CardLink
          key={data.num}
          bgImg={data.image}
          userName ={data.first}
          userFamily={data.last}
          userPosition={data.position} />
        )}


        <CardApp isDark={isDark}>
          {/* <CardUser></CardUser> */}
          {/* <CardMore></CardMore> */}
          {/* <CardLink></CardLink> */}
          <h3>title_01</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </CardApp>

      </div>
      </article> 
    
    
    
    
    <article id="compony"> <h3>compony info</h3></article>
    <article id="pricing"> <h3>pricing plans</h3></article>
    <article id="testimonals"> <h3>testimonals</h3></article>
    <article id="lastest"> <h3>lastest news</h3></article>
    <article id="experience"> <h3>experience</h3></article>
    </div>
  )
}

export default Main;
