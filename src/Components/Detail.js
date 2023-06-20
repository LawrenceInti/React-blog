import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { blog } from '../Data';


function Detail() {
    const click=useLocation().state;
  return (
    <>
    <div className='detail'>
        <h1>{click.b.title}</h1>
        <img src={click.b.image}  alt='error'className='de-image' ></img>
        <p className='de-content'>{click.b.content}</p>
    </div>
    <div className='blog'>
    {blog.filter((a)=>{
        return a.category==="blog"
      }).map((b,index)=>(

          <div>
          <Link to={`/detail/${b.id}`} state={{b}} key={index} > <img className='b-image' src={b.image} alt=''/> 
          <h1 className='b-title'>{b.title}</h1></Link>
        </div>
      ))
        
      }
    </div>
    </>
  )
}

export default Detail