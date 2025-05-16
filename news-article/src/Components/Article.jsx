import React, { useEffect, useState } from 'react'
import './Article.css'
import Item from './Item'

const Article = ({ option }) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)
                
                // Updated GNews API URL with proper parameters
                const url = `https://gnews.io/api/v4/top-headlines?category=${option.toLowerCase()}&apikey=${import.meta.env.VITE_API_KEY}&lang=en`
                
                const response = await fetch(url)
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                
                const data = await response.json()
                
                if (data.errors) { // GNews uses errors array instead of status field
                    throw new Error(data.errors.join(', '))
                }
                
                // Process images to force HTTPS and handle missing images
                const processedArticles = data.articles.map(article => ({
                    ...article,
                    image: article.image ? 
                        article.image.replace(/^http:\/\//i, 'https://') : 
                        'https://via.placeholder.com/300x200.png?text=No+Image'
                }))
                
                setArticles(processedArticles || [])
            } catch (error) {
                setError(error.message)
                console.error("Error fetching news:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [option])

    if (loading) {
        return <div className="text-center mt-4">Loading news...</div>
    }

    if (error) {
        return (
            <div className="alert alert-danger mt-4">
                Error loading news: {error}
                <br />
                {error.includes("403") && (
                    <small>
                        API limit reached or invalid API key
                    </small>
                )}
            </div>
        )
    }

    return (
        <div className='heading'>
            <h2 className='text-center'>
                Latest <span className='badge bg-danger'>News</span>
            </h2>
            {articles.length === 0 ? (
                <div className="alert alert-warning">No articles found</div>
            ) : (
                articles.map((news, index) => (
                    <Item 
                        key={`${news.publishedAt}-${index}`} // Better key
                        title={news.title}
                        description={news.content} // GNews uses content instead of description
                        src={news.image}         // Changed from urlToImage to image
                        url={news.url}
                    />
                ))
            )}
        </div>
    )
}

export default Article