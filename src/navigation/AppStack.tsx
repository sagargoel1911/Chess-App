import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import TabBar from './Tab';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import Profile from '../screens/Profile/Profile';
import GameInfo from '../screens/GameInfo/GameInfo';
import RouteNames from './RouteNames';

const Stack = createStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator
			initialRouteName={RouteNames.MainApp}
			screenOptions={{
				headerShown: false,
				...TransitionPresets.SlideFromRightIOS,
			}}>
			<Stack.Screen name={RouteNames.MainApp} component={TabBar} />
			<Stack.Screen name={RouteNames.Login} component={Login} />
			<Stack.Screen name={RouteNames.SignUp} component={SignUp} />
			<Stack.Screen name={RouteNames.Profile} component={Profile} />
			<Stack.Screen name={RouteNames.GameInfo} component={GameInfo} />
		</Stack.Navigator>
	);
};

export default AppStack;
