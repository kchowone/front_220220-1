import React from 'react'
import PricingList from '../../Compponent/PricingList';
import './Pricing.scss';


function Pricing() {


  return (
    <article id="pricing">
      <h3>pricing plans</h3>
      <p>let's fing the perfect plan</p>
      <ul className='pricing_list'>
        <PricingList />
        <PricingList point={true} />
        <PricingList />
      </ul>
    </article>

  )
}

export default Pricing