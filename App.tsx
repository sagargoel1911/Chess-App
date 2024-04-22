import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import theme from './src/utils/theme';
import AppStack from './src/navigation/AppStack';
import { persistor, store } from './src/store';
import { NativeBaseProvider } from 'native-base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.black,
	},
});

SplashScreen.preventAutoHideAsync();

const App = () => {
	const [fontsLoaded, fontError] = useFonts({
		'Montserrat-ExtraBold': require('./src/assets/fonts/Montserrat-ExtraBold.otf'),
		'Chess V3': require('./src/assets/fonts/Chess Glyph V3.otf'),
		'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.otf'),
		'Roboto-Regular': require('./src/assets/fonts/Roboto Black.otf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
					<NativeBaseProvider>
						<PersistGate loading={null} persistor={persistor}>
							<StatusBar />
							<AppStack />
						</PersistGate>
					</NativeBaseProvider>
				</SafeAreaView>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
