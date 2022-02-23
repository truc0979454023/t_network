import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Send from '../../../images/send.svg'
import LikeButton from '../../LikeButton'
import { likePost, unLikePost } from '../../../redux/actions/postAction'

const CardFooter = ({ post }) => {

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const [isLike, setIsLike] = useState(false)
    const [loadLike, setLoadLike] = useState(false)


    useEffect(() => {
        if (post.likes.find(like => like._id === auth.user._id))
            setIsLike(true)

    }, [post.likes, auth.user._id])

    const handleLike = async () => {
        if (loadLike) return;
        setIsLike(true)
        
        setLoadLike(true)
        await dispatch(likePost({ post, auth }))
        setLoadLike(false)

    }

    const handleUnLike = async () => {
        if (loadLike) return;
        setIsLike(false)

        setLoadLike(true)
        await dispatch(unLikePost({ post, auth }))
        setLoadLike(false)
    }

    return (
        <div className='card_footer'>
            <div className="card_icon_menu">
                <div className="">
                    <LikeButton
                        isLike={isLike}
                        handleLike={handleLike}
                        handleUnLike={handleUnLike}
                    />

                    <Link to={`/posts/${post._id}`} className='text-dark'>
                        <i className="material-icons">
                            chat_bubble_outline
                        </i>
                    </Link>

                    <img src={Send} alt="send" />
                </div>

                <i className="material-icons">
                    bookmark_border
                </i>
            </div>

            <div className="row justify-content-between d-flex">
                <h6 style={{ padding: '0 44px', cursor: 'pointer' }}>
                    {post.likes.length} likes
                </h6>
                <h6 style={{ padding: '0 44px', cursor: 'pointer' }}>
                    {post.comments.length} comments
                </h6>
            </div>
        </div>
    )
}

export default CardFooter
