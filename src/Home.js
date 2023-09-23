import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import PopularProductCard from './PopularProductCard';
import LatestNews from './LatestNews';

function Home() {
    const [data, setData] = useState({});
    const [btn, setBtn] = useState('top')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_29932e01ef0a9358beee19ff50890449c6324&language=en&category=' + `${btn}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [btn]);
    const filteredArticles = data.results ? data.results.filter(article => article.image_url !== null) : [];
    return (
        <div className='h-screen  bg-slate-400 flex flex-row'>
            <div className='flex  flex-col w-1/5 h-full  justify-start items-start p-10 bg-white mb-5'>
                <div className='flex flex-row '>
                    <img src="https://www.iconpacks.net/icons/2/free-icon-news-4301.png" className='w-14 pb-10' alt="" />
                    <h1 className='p-5 text-2xl'>News</h1>
                </div>
                <div className='my-10  '>
                    <div className='flex flex-row cursor-pointer hover:bg-slate-300 rounded-full p-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <button onClick={() => setBtn('top')} className='text-xl px-2'>home</button>
                    </div>
                    <div className='flex flex-row cursor-pointer hover:bg-slate-300 rounded-full p-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                        </svg>
                        <button className='text-xl px-2' onClick={() => setBtn('music')}>music</button>
                    </div>
                    <div className='flex flex-row cursor-pointer hover:bg-slate-300 rounded-full p-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                        </svg>
                        <button className='text-xl px-2' onClick={() => setBtn('sports')}>sports</button>
                    </div>
                    <div className='flex flex-row cursor-pointer hover:bg-slate-300 rounded-full p-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                        </svg>
                        <button className='text-xl px-2' onClick={() => setBtn('political')}>political</button>
                    </div>
                    <div className='flex flex-row cursor-pointer hover:bg-slate-300 rounded-full p-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                        <button className='text-xl px-2' onClick={() => setBtn('science')}>Science</button>
                    </div>
                    <div className='flex flex-row cursor-pointer hover:bg-slate-300 rounded-full p-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <button className='text-xl px-2' onClick={() => setBtn('health')}>Health</button>
                    </div>
                </div>
                <div className='w-full flex flex-row flex-1 px-5 mt-20'>
                    <div className='flex flex-col'>
                        <h1 className='text-lg'>Username</h1>
                        <h1 className='text-lg'>A_sdsjj</h1>
                    </div>
                </div>
            </div>

            <div className='w-full p-3 flex flex-col overflow-auto  bg-white border-x-4'>
                {filteredArticles.map((article) => (
                    <>{console.log(filteredArticles)}
                        <PopularProductCard key={article.article_id} title={article.title} image={article.image_url} description={article.description} /></>
                ))}
            </div>
            <div className='w-1/2 bg-white'>
                <LatestNews articles={filteredArticles} />
            </div>
        </div>
    );
}

export default Home;

