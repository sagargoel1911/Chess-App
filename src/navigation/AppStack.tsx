import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import TabBar from './Tab';
import Login from 'src/screens/Login/Login';
import SignUp from 'src/screens/SignUp/SignUp';
import Profile from 'src/screens/Profile/Profile';
import RouteNames from './RouteNames';
import CustomToast from 'src/common/CustomToast';
import Game from 'src/screens/Game/Game';

const Stack = createStackNavigator();

const AppStack = () => {
	return (
		<>
			<Stack.Navigator
				initialRouteName={RouteNames.MainApp}
				screenOptions={{
					headerShown: false,
					...TransitionPresets.SlideFromRightIOS,
					gestureEnabled: false,
				}}>
				<Stack.Screen name={RouteNames.MainApp} component={TabBar} />
				<Stack.Screen name={RouteNames.Login} component={Login} />
				<Stack.Screen name={RouteNames.SignUp} component={SignUp} />
				<Stack.Screen name={RouteNames.Profile} component={Profile} />
				<Stack.Screen name={RouteNames.Game} component={Game} />
			</Stack.Navigator>
			<CustomToast />
		</>
	);
};

export default AppStack;
