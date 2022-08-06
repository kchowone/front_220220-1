import React from 'react'
import PricingList from '../../Compponent/PricingList';
import './Pricing.scss';


function Pricing() {
const pList = [
  {point : null, id:1},
  {point : true, id:2},
  {point : null, id:3}
];


  return (
    <article id="pricing">
      <h3>pricing plans</h3>
      <p>let's fing the perfect plan</p>
      <ul className='pricing_list'>
        {pList.map((data) =>  <PricingList key={data.id} point={data.point}/>)}

      </ul>
    </article>

  )
}

export default Pricing