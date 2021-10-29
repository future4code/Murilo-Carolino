import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, CardActionArea, CardActions } from '@material-ui/core';


export default function PostCard(props) {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button>
                    Comentários
                </Button>
            </CardActions>
        </Card>
    );
}