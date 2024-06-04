import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import TabBar from './Tab';
import Login from 'src/screens/Login/Login';
import SignUp from 'src/screens/SignUp/SignUp';
import Profile from 'src/screens/Profile/Profile';
import RouteNames from './RouteNames';
import CustomToast from 'src/common/CustomToast';
import GameInfo from 'src/screens/GameInfo/GameInfo';
import GamePlay from 'src/screens/GamePlay/GamePlay';

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
				<Stack.Screen name={RouteNames.GameInfo} component={GameInfo} />
				<Stack.Screen name={RouteNames.GamePlay} component={GamePlay} />
			</Stack.Navigator>
			<CustomToast />
		</>
	);
};

export default AppStack;
