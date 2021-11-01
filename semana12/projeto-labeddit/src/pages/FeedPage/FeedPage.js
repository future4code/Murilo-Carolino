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
import axios from "axios";

function FeedPage() {
    useProtectedPage()
    const history = useHistory()

    const posts = useRequestData([], `${baseURL}/posts`)
    const onClickCard = (post) => {
        goToPostDetails(history, post.id)
    }

    const handlePostVote = (postId, direction) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        const body = {
            direction: direction
        }
        if (direction === 1){
            axios
            .post(`${baseURL}/posts/${postId}/votes`, body, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
            })
        } else if (direction === -1) {
            axios
            .put(`${baseURL}/posts/${postId}/votes`, body, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
            })
        } else {
            axios
            .delete(`${baseURL}/posts/${postId}/votes`, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
            })
        }
    }

    const postCards = posts.map((post) => {
        return (
            <PostCard 
                key={post.id}
                username={post.username}
                title={post.title}
                body={post.body}
                voteSum={post.voteSum}
                userVote={post.userVote}
                id={post.id}
                commentCount={post.commentCount}
                onClick={() => onClickCard(post)}
                handlePostVote={handlePostVote}
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