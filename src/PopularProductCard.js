import React from 'react'
export default function PopularProductCard(prop) {

    return (
        <div className='flex flex-1 flex-col   border-b-4'>
            <img src='https://assets-news-bcdn.dailyhunt.in/cmd/resize/900x580_90/fetchdata16/images/af/d6/c3/afd6c3fcf37f9ac6babed823c444a17121edc2c1f60dd326a9fbd6c9cd80456e.webp' alt='' className='w-[40em] mx-auto mt-5 h-[382px] rounded-lg' />
            <h3 className='mt-8 ml-8 px-10 text-2xl leading-normal font-semibold font-palanquin '>
                {prop.title}
            </h3>
            <p className='mt-4 ml-8 px-10 text-lg leading-normal font-normal font-palanquin mb-5'>
                {prop.description}
            </p>
        </div>
    )
}

