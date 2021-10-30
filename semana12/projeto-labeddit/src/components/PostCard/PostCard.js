import React from 'react';
import { Card, IconButton } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { CardContainer } from './styled';
import { ArrowDownward, ArrowUpward, Comment } from '@material-ui/icons';


export default function PostCard(props) {
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
                    <IconButton>
                        <ArrowUpward />
                    </IconButton>
                    <Typography variant={"overline"}>
                        {props.voteSum}
                    </Typography>
                    <IconButton>
                        <ArrowDownward />
                    </IconButton>
                    <Button startIcon={<Comment />}>
                        Comentários
                    </Button>
                </CardActions>
            </Card>
        </CardContainer>
    );
}