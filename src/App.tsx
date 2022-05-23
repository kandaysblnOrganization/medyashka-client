import React, {FC} from 'react';
import {ThemeProvider} from "@mui/material/styles";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";
import RouteComponent from "./routes";
import {ToastContainer} from "react-toastify";
import {Provider} from "react-redux";
import {store} from "./store/store";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
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
            </Provider>
        </ThemeProvider>
    );
};

export default App;