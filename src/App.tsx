import React, {FC} from 'react';
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";
import RouteComponent from "./routes";
import {ToastContainer} from "react-toastify";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <RouteComponent/>
            </BrowserRouter>

            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnFocusLoss
                pauseOnHover
            />
        </ThemeProvider>
    );
};

export default App;