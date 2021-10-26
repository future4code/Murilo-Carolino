import React from 'react';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { StyledToolbar } from "./styled"
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router';

function Header() {

    const history = useHistory()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Button onClick={() => goToFeed(history)} color="inherit">
                        LabEddit
                    </Button>
                    <Button onClick={() => goToLogin(history)} color="inherit">
                        Login
                    </Button>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}

export default Header