import { Button } from "@material-ui/core";
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/urls"
import PostCard from "../../components/PostCard/PostCard";
import { PostListContainer, ScreenContainer, MainContainer } from "./styled"
import { goToPostDetails } from "../../routes/coordinator";
import { useHistory } from "react-router";
import PostForm from "./PostForm";
import Loading from "../../components/Loading/Loading";

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
                title={post.title}
                body={post.body}
                voteSum={post.voteSum}
                onClick={() => onClickCard(post)}
            />
        )
    })
    

    return (
        <ScreenContainer>
                {postCards.length > 0 ? 
                    <MainContainer>
                        <PostForm />
                        <PostListContainer>
                            {postCards}
                        </PostListContainer>
                    </MainContainer>
                : 
                <Loading />}
        </ScreenContainer>
    )
}

export default FeedPage