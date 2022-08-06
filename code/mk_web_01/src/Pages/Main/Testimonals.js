import React from 'react'
import ContainerApp from '../../Compponent/ContainerApp';
import './Testimonals.scss'

function Testimonals() {


  const cardList = [];
  // const [list, setList] = useState(cardList);
  for(let i = 0; i < 15; i++){
    cardList.push(i);
    }

    const indicatorLen = Math.round(cardList.length / 5)

    // round floor ceil abs
    // console.log(list);

  return (
        
    <article id="testimonals">

      <ContainerApp>
        <h3>testimonals</h3>
        <p>Awesome clients we've worked with</p>
      </ContainerApp>

     
     <div className="worked_card_list">
        <div className="indicator"></div>
        
        
        <ul className='card_list'>
        {
          cardList.map((data,index)=><li key={index}>{index}</li>)
        }
      
      </ul>
     </div>
     
    </article>
  )
}

export default Testimonals