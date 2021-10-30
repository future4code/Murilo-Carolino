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
    const post = getPost.map((post) => {
        if (post.id === params.id) {
            return (
                <PostCard
                    key={post.id}
                    username={post.username}
                    title={post.title}
                    body={post.body}
                />
            )
        }
    })

    
    const postDetails = useRequestData([], `${baseURL}/posts/${params.id}/comments`)
    
    const postComments = postDetails.map((comment) => {
        return (
            <CommentCard 
                key={comment.id}
                username={comment.username}
                body={comment.body}
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