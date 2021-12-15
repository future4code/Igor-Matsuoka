import React from "react";
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URLs'
import { Post } from "../../Post/Post";


const FeedPage = () => {
    const posts = useRequestData([], `${BASE_URL}/posts`)
    useProtectedPage()

    const postsCards = posts.map((post)=>{
        return <Post
        key={post.id}
        title={post.title}
        body={post.body}
        date={post.createdAt}
        vote={post.voteSum}
        comment={post.commentCount}
        onClick={()=>null}
        />
    })

    return <div>
        <h1>FeedPage</h1>
        {postsCards}
    </div>
}

export default FeedPage;