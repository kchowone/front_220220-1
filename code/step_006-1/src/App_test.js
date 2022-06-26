import './App.css';
// import를 통해서 src경로를 통해서 image, js, css, data



function CardComponent(props){
  console.log(props);
  const price = parseInt(props.price);
  const koreaPrice = price.toLocaleString('ko-KR');

  
  const fnImage = () => {
    // return (!!props.url) ? props.url + props.image : 'image/flacticon' + props.image;
    let imgUrl = null;

    if(!!props.url){
      imgUrl = props.url + props.image;
    }else{
      imgUrl = 'image/flaction/' + props.image;
    }
    return imgUrl;
  }

  


  return (
    <li>
      {/* <div className="image" style={{backgroundImage:`url(${props.url})`}}></div> */}
      <div className="image" style={{backgroundImage:`url(${fnImage()})`}}></div>
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.content}</dd>
        <dd>{(!!props.narr)? props.narr : '설명이 들어가는 자리'}</dd>
        <dd className='price'> {koreaPrice}원</dd>
      </dl>
    </li>
  );
}


// function List(props){

//   const price =parseInt(price);
//   const koreaPrice = price.toLocaleString('ko-KR');

//   return (
//     <li>
//       <div className="image">이미지</div>
//       <dl>
//         <dt>{props.title}</dt>
//         <dd>{props.content}</dd>
//         <dd>narration</dd>
//         <dd className='price'> {koreaPrice}원</dd>
//       </dl>
//     </li>
//   );
// }






// ----------------------------------------------------


function App() {
  const cardData = [
    {id:1, title:'my Title 001', content: 'content_01', price:'3000', narr:'카드설명',url:'',image:'002-koala.png', link:''},
    {id:2, title:'my Title 002', content: 'content_02', price:'6000', url:'https://picsum.photos/id/',image:'238/200/300',link:''},
    {id:3, title:'title code', content: 'content_03', price:'12000', url:'https://picsum.photos/id/',image:'239/200/300', link:''},
    {id:4, title:'send title', content: 'content_04', price:'15000', url:'https://picsum.photos/id/',image:'240/200/300', link:''},
  ];


  const cardList = [];
  for(let i = 0; i< cardData.length; i++){
    cardList.push( 
    <CardComponent
   
    key={cardData[i].id}
    title={cardData[i].title}
    content={cardData[i].content}
    price={cardData[i].price}
    narr={cardData[i].narr}
    url={cardData[i].url}
    image={cardData[i].image}
    />
    );
  }




  return (
    <div className="App">
    <ol>
      {/* <List title ='my Title 001' content='content_01' price='3000' />
      <List title ='my Title 002' content='content_02'price='6000'/>
      <List title ='title code' content='content_03'price='12000'/>
      <List title ='send title' content='content_04'price='15000'/> */}
     {cardList}
    </ol>
    </div>
  );


}

export default App;
