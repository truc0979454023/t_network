import React, { useState, useEffect } from 'react'
import CommentDisplay from './comments/CommentDisplay'

const Comments = ({ post }) => {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState([])

    const [next, setNext] = useState(2)

    useEffect(() => {
        const newComment = post.comments.filter(comment => !comment.reply)
        setComments(newComment)
        setShowComments(newComment.slice(newComment.length - next))

    }, [post.comments, next])

    return (
        <div className='comments'>
            {
                showComments.map(comment => (
                    <CommentDisplay key={comment._id} comment={comment} post={post} />
                ))
            }

            {
                comments.length - next > 0
                    ? <div className='p-2 border-top'
                        style={{ cursor: 'pointer', color: 'crimson' }}
                        onClick={() => setNext(next + 5)}>
                        See more comments...
                    </div>
                    : comments.length - 2 > 0 &&
                    <div className='p-2 border-top'
                        style={{ cursor: 'pointer', color: 'crimson' }}
                        onClick={() => setNext(2)}>
                        Hide comments...
                    </div>
            }
        </div>
    )
}

export default Comments
