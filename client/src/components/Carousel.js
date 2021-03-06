import React from 'react'
import { useSelector } from 'react-redux';

const Carousel = ({ images, id }) => {

    const { theme } = useSelector(state => state)

    const isActive = index => {
        if (index === 0) return 'active';
    }

    return (
        <div id={`image${id}`} className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators" style={{ zIndex: '2' }}>
                {
                    images.map((image, index) => (
                        <li key={index} data-target={`#image${id}`} data-slide-to={index} className={isActive(index)}></li>
                    ))
                }
            </ol>
            <div className="carousel-inner">
                {
                    images.map((image, index) => (
                        <div key={index} className={`carousel-item ${isActive(index)}`} >
                            <img className="d-block w-100" style={{ maxHeight: "450px", objectFit: 'contain', background: '#f8f9fa', filter: theme ? 'invert(1)' : 'invert(0)' }}
                                src={image.url} alt={`${index} slide`} />
                        </div>
                    ))
                }
            </div>
            <a className="carousel-control-prev" href={`#image${id}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#image${id}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel
