import React from 'react'
import '../Home/style.css'
import bg from '../../assets/images/bg.png'

export const Home = () => {
  return (
    <section>
      <div className='content'>
        <img src={bg}/>
        <div className='text'>
          <h1>SPIDER-MAN</h1>
          <p>Bitten by a radioactive spider, Peter Parker’s arachnid abilities give
          him amazing powers he uses to help others, while his personal life continues
          to offer plenty of obstacles.</p>
          <div className='btns'>
            
          <button>ON SCREEN</button>
          <button>IN COMICS</button>
          </div>
        </div>
      </div>
    </section>
  )
}
