import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InViewAnimateLeft from '../transitions/InViewAnimateLeft1';
import News1 from '../../assets/news1.jpg';
import News2 from '../../assets/news2.jpg';
import News3 from '../../assets/news3.jpg';
import News4 from '../../assets/news4.jpg';
import News5 from '../../assets/news5.jpg';

const News = () => {
  const [news, setNews] = useState([]);
  const config = {
    'X-RapidAPI-Key': 'd095c2b774mshaf6c565a625dccdp1bd5f3jsn965821d84424',
    'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
  }

  const images = [News1, News2, News3, News4, News5]

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://fidelity-investments.p.rapidapi.com/news/list-top',
      {headers: config})
      console.log("data", response);
      setNews(response.data?.headlineResults[0]?.headline)
    } catch (err) {
      console.log("error",err);
    }
  };

  useEffect(() => {
    fetchNews();
  },[])
  return (
    <div>
      <h2 className='text-center font-extrabold text-gray-800 mb-2 text-3xl' >Latest Insights</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14' >
        {
          news.map((item, id) => id < 5 && (
            <div key={id}>
              <InViewAnimateLeft duration={(((id+1)*0.4)+0.4)} >
                <div className='py-2 px-6 md:p-6 
                hover:bg-opacity-25 cursor-pointer' >
                  <div className='mb-4 ' >
                    <img src={images[Math.floor(Math.random() * 5)]} alt={item.text} 
                    className="w-full md:w-[160px] md:h-[160px] h-[200px]" />
                  </div>
                  <h2 className='capitalize' >{item.text} </h2>
                  <p dangerouslySetInnerHTML={{__html:item?.summary}} ></p>
                  <p className='text-primary cursor-pointer font-bold md:text-lg' >
                    READ MORE
                  </p>
                </div>
              </InViewAnimateLeft>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default News