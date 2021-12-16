import React from "react";
import { PostContainer, PostHeader, PostMedia, PostFooter, Comments } from "./StyledPost";

export const Post = (props) => {
   
    return( 
    <PostContainer onClick={props.onClick}>

        <PostHeader>
            {props.username}
        </PostHeader>

        <PostMedia>
            <b>{props.title}</b>
            <p>{props.body}</p>
            <p>{props.createdAt}</p>
        </PostMedia>
        
        <PostFooter>
            <button>Vote Up</button>
            {props.voteSum}
            <button>Vote Down</button>
            <Comments>
            {props.commentCount} Comentários
            </Comments>
        </PostFooter>

    </PostContainer>
    
    )
}