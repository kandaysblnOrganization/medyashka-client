import {palette} from "../common";

export default {
    styleOverrides: {
        root: {
            backgroundColor: palette.primary.main,

            '& *': {
                color: 'white!important'
            },

            '& .MuiIconButton-root': {
                padding: 0
            }
        }
    }
}
