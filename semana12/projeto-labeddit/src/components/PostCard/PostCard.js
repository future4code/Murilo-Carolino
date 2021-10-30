import React from 'react';
import { Card, IconButton } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { CardContainer, CommentsContainer } from './styled';
import { ArrowDownward, ArrowUpward, Comment } from '@material-ui/icons';


export default function PostCard(props) {
    const handleUpVote = () => {
        if (props.userVote === 1 ) {
            props.handlePostVote(props.id)
        } else {
            props.handlePostVote(props.id, 1)
        }
    }

    const handleDownVote = () => {
        if (props.userVote === -1 ) {
            props.handlePostVote(props.id)
        } else {
            props.handlePostVote(props.id, -1)
        }
    }

    return (
        <CardContainer>
            <Card sx={{ maxWidth: 500, width: 90/100}} >
                <CardActionArea onClick={props.onClick}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.username}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing>
                    <div>
                        <IconButton onClick={handleUpVote}>
                            <ArrowUpward color={props.userVote === 1 ? "primary" : "inherit"}/>
                        </IconButton>
                        <Typography variant={"overline"}>
                            {props.voteSum}
                        </Typography>
                        <IconButton onClick={handleDownVote}>
                            <ArrowDownward color={props.userVote === -1 ? "secondary" : "inherit"}/>
                        </IconButton>
                    </div>
                    <CommentsContainer>
                        <Typography color={"primary"} sx={{ width: 18, textAlign: "center", boxShadow: 2, borderRadius: 1}}>
                            {props.commentCount}
                        </Typography>
                        <Button startIcon={<Comment />}>
                            Comentários
                        </Button>
                    </CommentsContainer>
                </CardActions>
            </Card>
        </CardContainer>
    );
}