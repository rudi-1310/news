import React from 'react'
export default function PopularProductCard({ title, description, image }) {

    return (
        <div className='flex flex-1 flex-col   border-b-4'>
            <img src={image} alt='' className='w-[40em] mx-auto mt-5 h-[382px] rounded-lg' />
            <h3 className='mt-8 ml-8 px-10 text-2xl leading-normal font-semibold font-palanquin '>
                {title}
            </h3>
            <p className='mt-4 ml-8 px-10 text-lg leading-normal font-normal font-palanquin mb-5'>
                {description}
            </p>
        </div>
    )
}

