import React from 'react';
import { Box } from '@material-ui/system';
import { Card, IconButton } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardContainer } from './styled';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function CommentCard(props) {
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
                    <IconButton>
                        <ArrowUpward />
                    </IconButton>
                    <Typography variant={"overline"}>
                        {props.userVote}
                    </Typography>
                    <IconButton>
                        <ArrowDownward />
                    </IconButton>
                </CardActions>
            </Card>
        </CardContainer>
    );
}
