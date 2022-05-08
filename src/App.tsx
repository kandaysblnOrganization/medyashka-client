import React, {FC} from 'react';
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";
import RouteComponent from "./routes";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <RouteComponent/>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;