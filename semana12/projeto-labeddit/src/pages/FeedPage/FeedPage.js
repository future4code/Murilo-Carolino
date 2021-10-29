import { Button } from "@material-ui/core";
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/urls"
import PostCard from "../../components/PostCard/PostCard";
import { PostListContainer, ScreenContainer } from "./styled"
import { goToPostDetails } from "../../routes/coordinator";
import { useHistory } from "react-router";

function FeedPage() {
    useProtectedPage()
    const history = useHistory()

    const posts = useRequestData([], `${baseURL}/posts`)
    const onClickCard = (post) => {
        goToPostDetails(history, post.id)
    }

    const postCards = posts.map((post) => {
        return (
            <PostCard 
                key={post.id}
                username={post.username}
                body={post.body}
                onClick={() => onClickCard(post)}
            />
        )
    })
    console.log(postCards)

    return (
        <ScreenContainer>
            <PostListContainer>
                {postCards}
            </PostListContainer>
        </ScreenContainer>
    )
}

export default FeedPage