import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import RootComponent from "./src/component/RootComponent";
import { LogBox } from "react-native";

const App = () => {
	LogBox.ignoreLogs([
		"[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
	]);
	return (
		<NativeBaseProvider>
			<Provider store={store}>
				<RootComponent/>
			</Provider>
		</NativeBaseProvider>
	);
}

export default App;
