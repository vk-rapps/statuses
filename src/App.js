import React, { useState } from 'react';
import { View } from '@vkontakte/vkui';

import Home from './containers/Home';

const App = () => {
	const [ activePanel, setActivePanel ] = useState("home");

	const goForward = (nextPanel = null) => {
		setActivePanel(nextPanel);
	};

	const navigator = {
		goForward,
	};

	return (
		<View activePanel={activePanel}>
			<Home id="home" navigator={navigator} />
		</View>
	);
};

export default App;
