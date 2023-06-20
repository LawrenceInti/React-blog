import React from 'react'
import { three,theLatest,latestArticles,topPosts,latestStories} from '../Data'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
    {/* // For First 3 images */}
    <div className='three'>
        {three.filter((a)=>{
        return a.category==="Home"
      }).map((b,index)=>(
        <div>
           <Link to={`/detail/${b.id}`} state={{b}} key={index}><img src={b.image} className="h1image" alt=''/></Link>
        </div>
      ))
}
        </div>
        
        {/* For THe Latest */}
        
        <h1>The Latest</h1>
        <hr></hr>
        <div className='theLatest'>
        {theLatest.filter((a)=>{
        return a.category==="Home"
      }).map((b,index)=>(
        <div>
       <Link to={`/detail/${b.id}`} state={{b}} key={index}> <img src={b.image} className='h2image' alt=''/></Link>
       <Link to={`/detail/${b.id}`} state={{b}} key={index}> <h1 className='h2title'>{b.title}</h1></Link>
       <Link to={`/detail/${b.id}`} state={{b}} key={index}> <p className='h2content'>{b.content}</p></Link>
        </div>
      ))
      }
    </div>

 {/* {for Latest Articles}  */}
    <h1>Latest Articles</h1>
    <hr/>
    <div className='latestArticles'>
      
    <div className='h3add'>Advertisement</div>
{
  latestArticles.filter((a)=>{
    return a.category==="Home"
  }).map((b,index)=>(
    <div>
     <Link to={`/detail/${b.id}`} state={{b}} key={index}><img src={b.image} className='h3image' alt=''/></Link>
      <div className='h3text'>
      <Link to={`/detail/${b.id}`} state={{b}} key={index}> <h1 className='h3title'>{b.title}</h1></Link>
      <Link to={`/detail/${b.id}`} state={{b}} key={index}> <p className='h3content'>{b.content}</p></Link>
      </div>
    </div>
  ))
}
    </div>
    <img src={"https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg"}alt='error' className='chinawall'/>

    {/* for Top posts */}
    <h1 className='h4head'>Top Posts</h1>
    <div className='topPosts'>
   {
    topPosts.filter((a)=>{
      return a.category==="Home";
    }).map((b,index)=>(
      <div>
        <Link to={`/detail/${b.id}`} state={{b}} key={index}><img  src={b.image} className='h4image'alt=""/></Link>
        <Link to={`/detail/${b.id}`} state={{b}} key={index} > <h1 className='h4title'>{b.title}</h1></Link>
        </div>
    ))
   }
    </div>

    {/* latestStories */}
    <div className='latestStories'>
    <div className='h5head'>
    <h1>Latest Stories</h1>
    <hr/>
    </div>
    <div className='h5text'>
      {
        latestStories.filter((a)=>{
          return a.category==="Home";
        }).map((b,index)=>(
          <div>
            <h1 className='h5title'> {b.title} </h1>
           <p className='h5content'> {b.content} </p>
            </div>
        ))
      }
    </div>
    </div>
    </div>
  )
}

export default Home