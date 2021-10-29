import { Button } from "@material-ui/core";
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { baseURL } from "../../constants/urls"
import PostCard from "../../components/PostCard/PostCard";

function FeedPage() {
    useProtectedPage()

    const posts = useRequestData([], `${baseURL}/posts`)
    console.log(posts)

    const postCards = posts.map((post) => {
        return (
            <PostCard 
                username={post.username}
                body={post.body}
            />
        )
    })

    return (
        <div>
            <h1>FeedPage</h1>
            {postCards}
        </div>
    )
}

export default FeedPage