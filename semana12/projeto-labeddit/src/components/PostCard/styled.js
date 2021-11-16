import styled from "styled-components";
import { CardActions } from "@material-ui/core";

export const CardContainer = styled.div `
    max-width: 550px;
    width: 100vw;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CommentsContainer = styled.div `
    display: flex;
    align-items: center;
`

export const StyledCardActions = styled(CardActions) `
    justify-content: space-between;
`