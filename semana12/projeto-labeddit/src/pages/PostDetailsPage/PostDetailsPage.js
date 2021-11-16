import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import CommentCard from "../../components/CommentCard/CommentCard";
import Loading from "../../components/Loading/Loading";
import PostCard from "../../components/PostCard/PostCard";
import { baseURL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import CommentForm from "./CommentForm";
import { ScreenContainer, CommentsListContainer } from "./styled";

function PostDetailsPage() {
    useProtectedPage()
    const params = useParams()
    const getPost = useRequestData([], `${baseURL}/posts`)

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



    const post = getPost.map((post) => {
        if (post.id === params.id) {
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
                    handlePostVote={handlePostVote}
                />
            )
        }
    })

    
    const postDetails = useRequestData([], `${baseURL}/posts/${params.id}/comments`)
    
    const handleCommentVote = (commentId, direction) => {
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
            .post(`${baseURL}/comments/${commentId}/votes`, body, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
            })
        } else if (direction === -1) {
            axios
            .put(`${baseURL}/comments/${commentId}/votes`, body, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
            })
        } else {
            axios
            .delete(`${baseURL}/comments/${commentId}/votes`, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
            })
        }
    }

    const postComments = postDetails.map((comment) => {
        return (
            <CommentCard 
                key={comment.id}
                username={comment.username}
                body={comment.body}
                voteSum={comment.voteSum}
                id={comment.id}
                userVote={comment.userVote}
                handleCommentVote={handleCommentVote}
            />
        )
    })
    
    return (
        <ScreenContainer>
            {post.length > 0 ? 
                (<div>
                    {post} 
                    <CommentForm />
                    <CommentsListContainer> 
                        {postComments}
                    </CommentsListContainer>
                </div>)
                : 
                <Loading />}
            
        </ScreenContainer>
    )
}

export default PostDetailsPage