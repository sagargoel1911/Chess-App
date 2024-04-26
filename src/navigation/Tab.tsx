import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'src/screens/Home/Home';
import Puzzles from 'src/screens/Puzzles';
import Learn from 'src/screens/Learn';
import Watch from 'src/screens/Watch';
import More from 'src/screens/More';
import theme from 'src/utils/theme';
import { TabNames } from './RouteNames';

const Tab = createBottomTabNavigator();

const TabBar = () => {
	return (
		<Tab.Navigator
			initialRouteName={TabNames.Home}
			screenOptions={{
				headerShown: false,
				tabBarInactiveTintColor: theme.colors.icon_inactive,
				tabBarStyle: {
					height: 56,
					backgroundColor: theme.colors.brand_color_extra_dark,
					borderTopWidth: 0,
					paddingTop: 6,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					paddingBottom: 6,
				},
			}}>
			<Tab.Screen
				name={TabNames.Home}
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <Text style={{ fontFamily: theme.fonts.chess, fontSize: 25, color: color }}></Text>,
					tabBarActiveTintColor: theme.colors.icon_green,
				}}
			/>
			<Tab.Screen
				name={TabNames.Puzzles}
				component={Puzzles}
				options={{
					tabBarIcon: ({ color }) => <Text style={{ fontFamily: theme.fonts.chess, fontSize: 20, color: color }}>Ϟ</Text>,
					tabBarActiveTintColor: theme.colors.icon_orange,
				}}
			/>
			<Tab.Screen
				name={TabNames.Learn}
				component={Learn}
				options={{
					tabBarIcon: ({ color }) => <Text style={{ fontFamily: theme.fonts.chess, fontSize: 20, color: color }}>ἠ</Text>,
					tabBarActiveTintColor: theme.colors.icon_blue,
				}}
			/>
			<Tab.Screen
				name={TabNames.Watch}
				component={Watch}
				options={{
					tabBarIcon: ({ color }) => <Text style={{ fontFamily: theme.fonts.chess, fontSize: 20, color: color }}>—</Text>,
					tabBarActiveTintColor: theme.colors.icon_purple,
				}}
			/>
			<Tab.Screen
				name={TabNames.More}
				component={More}
				options={{
					tabBarIcon: ({ color }) => <Text style={{ fontFamily: theme.fonts.chess, fontSize: 20, color: color }}>t</Text>,
					tabBarActiveTintColor: theme.colors.white,
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabBar;
