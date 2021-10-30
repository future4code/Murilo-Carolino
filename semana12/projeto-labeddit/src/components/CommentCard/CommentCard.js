import React from 'react';
import { Box } from '@material-ui/system';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardContainer } from './styled';

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
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </CardContainer>
    );
}
