import React, { useState } from 'react'

const Item = ({ title, description, src, url }) => {
    const [imgSrc, setImgSrc] = useState(src)
    const [imgError, setImgError] = useState(false)

    const handleImageError = () => {
        setImgError(true)
        setImgSrc('https://via.placeholder.com/300x200.png?text=Image+Not+Available')
    }

    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" 
             style={{ maxWidth: "348px", minHeight: "420px" }}>
            <img 
                src={imgError ? 'https://via.placeholder.com/300x200.png?text=Image+Not+Available' : imgSrc}
                style={{ height: "200px", width: '100%', objectFit: 'cover' }}
                className="card-img-top"
                alt={title}
                onError={handleImageError}
            />
            <div className="card-body">
                <h5 className="card-title">
                    {title?.slice(0, 50) || 'No title available'}
                </h5>
                <p className="card-text">
                    {description ? description.slice(0, 90) + '...' : 'No description available'}
                </p>
                <a 
                    href={url} 
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read more
                </a>
            </div>
        </div>
    )
}

export default Item