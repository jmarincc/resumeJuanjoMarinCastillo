import React from 'react'
import { GifGridItem } from '../GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GiftGrid =  ({category}) => {
 
  const {data:images, loading} = useFetchGifs(category);
 
  return (
    <>
      <h3 className="card animate__animated animate__fadein">{category}</h3>
      {loading && <p className="card animate__animated animate__flash">L o a d i n g</p>}
      <div className='card-grid'>
        {
            images.map(img=>(
               <GifGridItem 
                  key={img.id}
                  {...img}/>
            ))
        }
      </div>
    </>
    
  )
}
