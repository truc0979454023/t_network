import React from 'react'
import { useSelector } from 'react-redux'

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
    const { theme } = useSelector(state => state)
    return (
        <>
            {
                isLike ?
                    <i className="material-icons text-danger"
                        onClick={handleUnLike}
                        style={{ filter: theme ? 'invert(1)' : 'invert(0)' }}>
                        favorite
                    </i > :
                    <i className="material-icons"
                        onClick={handleLike}>
                        favorite_border
                    </i>
            }

        </>
    )
}


export default LikeButton
