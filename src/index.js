import 'core-js/features/map';
import 'core-js/features/set';

import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';

// App
import App from './App';
import '@vkontakte/vkui/dist/vkui.css';

// Store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store';
import * as API from './api';

import { loadProfile } from './store/profile/actions';
import { loadStatuses } from './store/statuses/actions';

export const store = createStore(rootReducer);
API.getProfile().then((profile) => store.dispatch(loadProfile(profile)));
API.getStatuses().then((statuses) => store.dispatch(loadStatuses(statuses)));

// Init VK Mini App
bridge.send('VKWebAppInit');

// Theme changer
bridge.subscribe(({ detail: { type, data }}) => {
    if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "bright_light";
        document.body.attributes.setNamedItem(schemeAttribute);
    }
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
