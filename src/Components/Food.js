import React from 'react'
import { Data } from '../Data'
import { Link } from 'react-router-dom'


function Food() {
  return (
    <div className='total'>
    <div className='component'>
      {Data.filter((a)=>{
        return a.category==="Food"
      }).map((b,index)=>(

        <div>
          <div className='topic'>
          <Link to={`/detail/${b.id}`} state={{b}} key={index} > <img className='h-image' src={b.image} alt=''/> </Link>
          <div className='h-text'>
          <Link to={`/detail/${b.id}`} state={{b}} key={index} >  <h1 className='h-title'>{b.title}</h1> </Link>
           <p className='h-content'>{b.content}</p>
           </div>
        </div>
        </div>
      ))
        
      }
    </div>

<div className='h-add'>Advertisement</div>




    <div className='component2'>
      {Data.filter((a)=>{
        return a.category==="Food2"
      }).map((b,index)=>(

        <div>
          <div className='topic2'>
          <Link to={`/detail/${b.id}`} state={{b}} key={index} > <img className='h-image2' src={b.image} alt=''/> </Link>
          <Link to={`/detail/${b.id}`} state={{b}} key={index} >  <h1 className='h-title2'>{b.title}</h1> </Link>
        </div>
        </div>
      ))
        
      }
    </div>

    

    <div className='component1'>
      {Data.filter((a)=>{
        return a.category==="Food1"
      }).map((b,index)=>(

        <div>
          <div className='topic1'>
          <Link to={`/detail/${b.id}`} state={{b}} key={index} > <img className='h-image1' src={b.image} alt=''/> </Link>
          <div className='h-text1'>
          <Link to={`/detail/${b.id}`} state={{b}} key={index} >  <h1 className='h-title1'>{b.title}</h1> </Link>
           </div>
        </div>
        </div>
      ))
        
      }
    </div>
    </div>
  )
}


export default Food