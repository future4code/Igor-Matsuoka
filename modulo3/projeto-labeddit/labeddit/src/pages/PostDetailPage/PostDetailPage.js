import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/URLs'
import CommentForm from "./PostPageUseForm";
import { createCommentVote, deleteCommentVote, changeCommentVote } from "../../services/Votes";


const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)

    const vote = (id, vote) => {
        const body = {
            direction: vote
        }
        if (vote === 1 && !upVote && !downVote){
            setUpVote(true)
            createCommentVote(id, body)
        } else if (vote === 1 && !upVote && !downVote){
            setDownVote(true)
            createCommentVote(id, body)
        } else if (vote === 1 && upVote) {
            setUpVote(false)
            deleteCommentVote(id)
        } else if (vote === 1 && downVote) {
            setDownVote(false)
            deleteCommentVote(id)
        } else if (vote === -1 && upVote && downVote) {
            setUpVote(true)
            setDownVote(false)
            changeCommentVote(id, body)
        } else {
            setUpVote(false)
            setDownVote(true)
            changeCommentVote(id, body)
        }
    }

    /* useEffect(()=>{},[]) */

    const commentsArray = comments && comments.map((comment)=>{
        return <div key={comment.id}>
            {comment.username}
            {comment.body}
            {comment.createdAt}
            {comment.voteSum}
            <button onClick={() => vote(comment.id, 1)}>VoteUp</button>
            <button onClick={() => vote(comment.id, -1)}>VoteDown</button>
        </div>
    })

    const renderPost = (id) => posts && posts.filter((post) => {
        if (post.id === id) {
            return post
        }
    }).map((post) => {
        return (
            <div key={post.id}>
                <p>{post.username}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
                <p>{post.voteSum}</p> Curtidas
                <p>{post.commentCount}</p> Comentários
            </div>
        )
    })
    
    return (
        <div>
            <div>
            {renderPost(params.id)}
            <CommentForm id={params.id}/>
            {commentsArray}
            </div>
        </div>
    )
}

export default PostDetailPage;