import React, { useEffect, useState } from 'react'
import './Article.css'
import Item from './Item'
const Article = ({option}) => {

    const [articles, setarticle] = useState([])

    useEffect(()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${option}&apiKey=${import.meta.env.VITE_API_KEY}`
      fetch(url).then(response=>response.json()).then(data=>setarticle(data.articles));

    },[option])
  return (
    <div className='heading'>
     <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
     {articles.map((news,index)=>{
      return <Item key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
     })}
    </div>
  )
}

export default Article
