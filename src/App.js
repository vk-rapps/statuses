import React, { useState } from 'react';
import { View, ScreenSpinner } from '@vkontakte/vkui';

import Home from './containers/Home';
import Create from './containers/Create';

const App = () => {
	const [ activePanel, setActivePanel ] = useState("create");
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
		</View>
	);
};

export default App;
