import React from "react";
import { useParams } from "react-router";
import PostCard from "../../components/PostCard/PostCard";
import { baseURL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

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
                    body={post.body}
                />
            )
        }
    })

    console.log(post)

    const postDetails = useRequestData([], `${baseURL}/posts/${params.id}/comments`)

    const postComments = postDetails.map((comment) => {
        return (
            <div key={comment.id}>
                <h3>{comment.username}</h3>
                <p>{comment.body}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>PostDetailsPage</h1>
            {post}
            {postComments}
        </div>
    )
}

export default PostDetailsPage