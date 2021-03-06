import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from 'components/App';
import Root from 'Root';

const rootSelector = document.getElementById('root');

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>
    , rootSelector);