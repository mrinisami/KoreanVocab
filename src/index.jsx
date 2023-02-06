import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
    import {ThemeProvider, CssBaseline} from "@mui/material"
import theme from "./theme"

ReactDOM.render(
<BrowserRouter>
<ThemeProvider theme={theme}>
    <CssBaseline />
        <App />
</ThemeProvider>
</BrowserRouter>, document.getElementById('polyglot'));
