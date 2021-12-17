import React, {useState} from "react";
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URLs'
import { Post } from "../../Post/Post";
import { goToPostDetail } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import PostForm from "./FeedPageUseForm";
import { createPostVote, deletePostVote, changePostVote } from "../../services/Votes";


const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)

    const vote = (id, vote) => {
        const body = {
            direction: vote
        }
        if (vote === 1 && !upVote && !downVote){
            setUpVote(true)
            createPostVote(id, body)
        } else if (vote === 1 && !upVote && !downVote){
            setDownVote(true)
            createPostVote(id, body)
        } else if (upVote) {
            deletePostVote(id)
            setUpVote(false)
            setDownVote(false)
        } else if (downVote) {
            deletePostVote(id)
            setDownVote(false)
        } else if (vote === -1 && upVote && downVote) {
            setUpVote(true)
            setDownVote(false)
            changePostVote(id, body)
        }  else {
            setUpVote(false)
            setDownVote(true)
            changePostVote(id, body)
        }
    }

    const onClickPost = (id) => {
        goToPostDetail(navigate, id)
    }

    const postsCards = posts.map((post)=>{
        return <div key = {post.id}>
            <Post
            username = {post.username}
            title = {post.title}
            body = {post.body}
            createdAt = {post.createdAt}
            commentCount = {post.commentCount}
            voteSum = {post.voteSum}
            onClick = {() => onClickPost(post.id)}
            />
            <button onClick={() => vote(post.id, 1)}>VoteUp</button>
            <button onClick={() => vote(post.id, -1)}>VoteDown</button>
            </div>
    })

    return <div>    
        <PostForm/>
        {postsCards}
    </div>
}

export default FeedPage;