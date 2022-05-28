import {createTheme} from '@mui/material/styles';

import {
    MuiButton,
    MuiInputBase,
    MuiDialogTitle,
    MuiDialogContent,
    MuiDialogActions,
    MuiOutlinedInput,
    MuiPagination,
    MuiBackdrop
} from './overrides';
import {
    palette,
    typography
} from "./common";

const theme = createTheme({
    palette,
    typography,

    components: {
        MuiButton,
        MuiInputBase,
        MuiDialogTitle,
        MuiDialogContent,
        MuiDialogActions,
        MuiOutlinedInput,
        MuiPagination,
        MuiBackdrop,
    },
});

export default theme;
