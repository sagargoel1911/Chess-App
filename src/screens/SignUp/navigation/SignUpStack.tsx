import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import RouteNames from './RouteNames';
import Main from '../components/Main';
import Email from '../components/Email';
import Password from '../components/Password';
import Username from '../components/Username';
import theme from 'src/utils/theme';

const Stack = createStackNavigator();

const SignUpStack = (props: any) => {
	return (
		<Stack.Navigator
			initialRouteName={RouteNames.Main}
			screenOptions={({ navigation: navigation }) => {
				props.update_nav(navigation);
				return {
					headerShown: false,
					cardStyle: { backgroundColor: theme.colors.brand_color_dark },
					...TransitionPresets.SlideFromRightIOS,
				};
			}}>
			<Stack.Screen name={RouteNames.Main} component={Main} />
			<Stack.Screen name={RouteNames.Email} component={Email} />
			<Stack.Screen name={RouteNames.Password} component={Password} />
			<Stack.Screen name={RouteNames.Username} component={Username} />
		</Stack.Navigator>
	);
};

export default SignUpStack;
