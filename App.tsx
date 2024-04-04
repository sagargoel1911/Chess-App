import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import theme from './src/utils/theme';
import SignUp from './src/screens/SignUp/SignUp';
import Login from './src/screens/Login/Login';

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
		'Chess V3': require('./src/assets/fonts/Chess Glyph Regular.otf'),
		'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.otf'),
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
		<SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
			<StatusBar />
			<SignUp />
			{/* <Login /> */}
		</SafeAreaView>
	);
};

export default App;
