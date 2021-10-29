import React, { useState } from 'react';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { StyledToolbar } from "./styled"
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router';

function Header({rightButtonText, setRightButtonText}) {
    const token = localStorage.getItem("token")
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Button onClick={() => goToFeed(history)} color="inherit">
                        LabEddit
                    </Button>
                    <Button onClick={rightButtonAction} color="inherit">
                        {rightButtonText}
                    </Button>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}

export default Header