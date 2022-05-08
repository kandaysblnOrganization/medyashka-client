import React, {FC} from 'react';
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>

            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;