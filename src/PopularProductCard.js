import React from 'react';
import axios from 'axios';
const arr = new Array()
export default function PopularProductCard({ title, description, image }) {


    const handleTitleClick = async (history) => {

        arr.push(history)
        alert(history)
        localStorage.setItem('history', arr)
        console.log(localStorage.getItem('email'))

        // Make an HTTP POST request to your API to save the title
        // Use the passed value directly

        await axios
            .post('http://localhost:8000/api/saveTitle', { history: arr }) // Use titt here
            .then((response) => {
                console.log('Title saved successfully');
            })
            .catch((error) => {
                console.error('Error saving title:', error);
            });
    };

    return (
        <div className='flex flex-1 flex-col border-b-4'>
            <img src={image} alt='' className='w-[40em] mx-auto mt-5 h-[382px] rounded-lg' />
            <h3
                className='mt-8 ml-8 px-10 text-2xl leading-normal font-semibold font-palanquin'
                onClick={() => handleTitleClick(title)} // Pass the title as an argument
            >
                {title}
            </h3>
            <p className='mt-4 ml-8 px-10 text-lg leading-normal font-normal font-palanquin mb-5'>
                {description}
            </p>
        </div>
    );
}
