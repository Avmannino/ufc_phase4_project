import React, { useEffect, useState } from 'react';
import './Comments.css';
import { Link, useOutletContext } from 'react-router-dom';


export default function Comments({ event }) {
    const [comments, setAllComments] = useState([])
    const { user, attemptComment } = useOutletContext();
    const [comment, setComment] = useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:5555/comments")
            .then((response) => response.json())
            .then((comments) => {
                setAllComments(comments);
                console.log(comments)
            });
    }, []);

    const handleChangeComment = (e) => setComment(e.target.value);

    function handleSubmit(e) {
        e.preventDefault();
        if (!comment || !comment.trim()) {
            alert("Please Enter Valid Comment.")
        }
        else {
            attemptComment({ review: comment, user_id: user.id, event_id: event.id })
                .then((newComment) => {
                    setAllComments(prevComments => [newComment, ...prevComments]);
                    setComment("");
                })
                .catch(error => {
                    console.error('Error posting comment:', error);
                });
        }
    }

    return (
        <div className='comments-div'>
            {user ?
                <form className='form-com' onSubmit={(e) => handleSubmit(e)}>
                    <input type='textbox' className='text-input' onChange={handleChangeComment} value={comment}></input>
                    <input type='submit' className='submit-button' value="Post"></input>
                </form> :
                <><Link to="/login" className='log-link'>LOG IN</Link>
                    <h3 className='text-log-comment'>Please Log-in to comment</h3></>
            }
            <h4 style={{border: "1px solid red"}}>UFC {event.event_num} Discussion Thread</h4>
            <div className='all-comments'>
                {comments ? comments.map((comm) => (
                    <p key={comm.id} className='single-comment'>
                        <strong style={{ color: '#d10000', fontWeight: 'bolder', fontSize: '1.34rem' }}>{comm.user.name}:</strong>
                        <span style={{ fontSize: '1.1rem', paddingLeft: '0.7vh', paddingBottom: '15px' }}>{comm.review}</span>
                    </p>
                )) : <p>Be The First To Comment!</p>}
            </div>



        </div>
    )
}