import React from "react"
import { CircularProgress } from "@material-ui/core"
import { ScreenContainer } from "./styled"

const Loading = () => {
    return (
        <ScreenContainer>
            <CircularProgress />
        </ScreenContainer>
    )
}

export default Loading