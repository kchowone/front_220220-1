import React from 'react'
import './Company.scss';

function Company() {
  return (
    <article id="company">
      <h3 className='blind'>company info</h3>
      <div className='our_company company_area'>
        <div className='image'>
          <span className='blind'>이미지설명</span>
        </div> 

        <div className='detail_contents'>
          <h4>our company</h4>
          <dl>
            <dt>Createor of quality designs <br />
              and thinker of fresh ideas 
            </dt>
            <dd className='narr'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, similique.
            </dd>
          </dl>
            
          <div className='more_link'>
            <a href='#'>read more</a>
          </div>
          
        </div>
       
  

      </div>

      <div className='the_difference company_area'>
        <div className='image'>
         <span className='blind'>이미지설명</span>
        </div>
      
        <div className='detail_contents'>
          <h4>our company</h4>
          <dl className='detail_list'>
            <dt>Experience true business performance incerases</dt>
            <dd className='data_count'>
              <dl className='count_items'>
                <dt>business increase</dt>
                <dd>
                <span className='count'>87</span>
                <span className='unit'>+</span>
                </dd>
                <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quisquam?</dd>
              </dl>
              
              <dl className='count_items'>
                  <dt>new accounts</dt>
                  <dd><span className='count'>267</span></dd>
                  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quisquam?</dd>
              </dl>
            </dd>
          </dl>
        </div>


      </div>
    </article>

  )
}

export default Company