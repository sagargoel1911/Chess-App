import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual } from 'react-redux';

import theme from 'src/utils/theme';
import UserInfo from './components/UserInfo';
import PreviousGames from './components/PreviousGames';
import { useAppSelector } from 'src/store';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_extra_dark,
	},
	header_container: {
		flexDirection: 'row',
		backgroundColor: theme.colors.brand_color_extra_dark,
		alignItems: 'center',
		height: 55,
		paddingHorizontal: 15,
	},
	back: {
		fontFamily: theme.fonts.chess,
		fontSize: 24,
		color: theme.colors.brand_color_text_light,
	},
});

const Profile = () => {
	const navigation = useNavigation<any>();
	const { username, game_history } = useAppSelector(
		(state) => ({
			username: state.persistedUserData.username,
			game_history: state.persistedUserData.game_history,
		}),
		shallowEqual,
	);

	const go_back = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.header_container}>
				<Pressable onPress={go_back}>
					<Text style={styles.back}>[</Text>
				</Pressable>
			</View>
			<ScrollView>
				<UserInfo username={username} />
				<PreviousGames game_history={game_history} />
			</ScrollView>
		</View>
	);
};

export default Profile;
