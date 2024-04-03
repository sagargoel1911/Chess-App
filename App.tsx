import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import Login from './src/screens/Login/Login';
import theme from './src/utils/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.black,
	},
});

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		'Montserrat-ExtraBold': require('./src/assets/fonts/Montserrat-ExtraBold.otf'),
		'Chess V3': require('./src/assets/fonts/Chess Glyph Regular.otf'),
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
			<Login />
		</SafeAreaView>
	);
}
