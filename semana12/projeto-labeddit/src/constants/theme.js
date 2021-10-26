import { createTheme } from "@material-ui/core";
import { primaryColor, secondaryColor, errorColor, infoColor, dividerColor, backgroundColor } from "./colors";

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        error: {
            main: errorColor,
        },
        info: {
            main: infoColor,
        },
        divider: dividerColor,
        background: {
            default: backgroundColor,
        },
    },
});

export default theme