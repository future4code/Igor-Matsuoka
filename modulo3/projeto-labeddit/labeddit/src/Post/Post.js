import React from "react";
import { PostContainer, PostHeader, PostMedia, PostFooter } from "./StyledPost";

export const Post = (props) => {
    return( 
    
    <PostContainer onClick={props.onClick}>

        <PostHeader>
            User
        </PostHeader>

        <PostMedia>
            <b>{props.title}</b>
            <p>{props.body}</p>
            {props.createdAt}
        </PostMedia>
        
        <PostFooter>
            {props.voteSum}
            {props.commentCount}
        </PostFooter>

    </PostContainer>
    
    )
}