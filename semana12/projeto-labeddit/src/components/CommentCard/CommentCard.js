import React from 'react';
import { Card, IconButton } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardContainer } from './styled';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function CommentCard(props) {

    const handleUpVote = () => {
        if (props.userVote === 1 ) {
            props.handleCommentVote(props.id)
        } else {
            props.handleCommentVote(props.id, 1)
        }
    }

    const handleDownVote = () => {
        if (props.userVote === -1 ) {
            props.handleCommentVote(props.id)
        } else {
            props.handleCommentVote(props.id, -1)
        }
    }

    return (
        <CardContainer>
            <Card sx={{ maxWidth: 410, width: 80/100 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.username}
                    </Typography>
                    <Typography variant="body2">
                        {props.body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={handleUpVote}>
                        <ArrowUpward color={props.userVote === 1 ? "primary" : "inherit"}/>
                    </IconButton>
                    <Typography variant={"overline"}>
                        {props.voteSum}
                    </Typography>
                    <IconButton onClick={handleDownVote}>
                        <ArrowDownward color={props.userVote === -1 ? "secondary" : "inherit"}/>
                    </IconButton>
                </CardActions>
            </Card>
        </CardContainer>
    );
}
