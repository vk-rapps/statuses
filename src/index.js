import 'core-js/features/map';
import 'core-js/features/set';

import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';

import App from './App';
import '@vkontakte/vkui/dist/vkui.css';

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

ReactDOM.render(<App />, document.getElementById('root'));
