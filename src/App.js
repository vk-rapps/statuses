import React, { useState } from 'react';
import { View, ScreenSpinner } from '@vkontakte/vkui';

import Home from './containers/Home';
import Create from './containers/Create';
import Status from './containers/Status';

const App = () => {
	const [ activePanel, setActivePanel ] = useState("home");
	const [ popout, setPopout ] = useState(null);

	const goForward = (nextPanel = null) => {
		setActivePanel(nextPanel);
	};

	const showLoader = () => {
		setPopout(<ScreenSpinner/>);
		return () => setPopout(null);
	};

	const navigator = {
		goForward,
		showLoader,
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id="home" navigator={navigator} />
			<Create id="create" navigator={navigator} />
			<Status id="status" navigator={navigator} />
		</View>
	);
};

export default App;
