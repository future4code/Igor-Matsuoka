import React from "react";
import { BodyText, PostContainer, Text } from "./StyledPost";

export const Post = (props) => {
   
    return( 
    <PostContainer onClick={props.onClick}>
        <BodyText>
        <Text>{props.username} </Text>
        <Text> Título: {props.title}</Text>
        <Text> Texto: {props.body}</Text>
        </BodyText>
    </PostContainer>
    
    )
}