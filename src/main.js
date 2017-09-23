import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import getRouter from 'ROUTER'
import {Provider} from 'react-redux';
import store from 'STORE';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/index.js', () => {
        const getRouter = require('./router/index.js').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
             <Provider store={store}>
            {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}