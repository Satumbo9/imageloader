"use client"

import Image from 'next/image';
import { CAR_MODELS } from '../const';
import { useState, useEffect } from 'react';
import Tesla from '../img/testla.avif';


export default  function ImageLoader () { 

    const [ImageLoaded, setImageLoaded] = useState(0);
    const totalImages = CAR_MODELS.length;



    function  handleLoader (){
        console.log("Function Handler!!");
        setImageLoaded(x =>{

            return x+1;
        } );
        console.log("Current loaded images: " + ImageLoaded);

        


    }



    return(
        <div className="">
            <p>Image Page Loader</p>

            {CAR_MODELS.map((items, index)=>(
                <div key={index}>
                    <Image 
                    // className='w-[400px] h-[400px]'
                    onLoad={handleLoader}
                    placeholder='blur'
                    src={items.image}
                    width={600}
                    height={600}
                    alt={items.name}
                    priority
                    
                    />
                    <p>{items.name}</p>


                </div>

            ))
            }
        </div>
    )
}