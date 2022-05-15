import {palette} from "../common";

export default {
    styleOverrides: {
        root: {
            backgroundColor: palette.primary.main,

            '& .MuiIconButton-root': {
                padding: 0
            }
        }
    }
}
