import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../utils/theme';
import UserInfo from './components/UserInfo';
import PreviousGames from './components/PreviousGames/PreviousGames';

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

	return (
		<View style={styles.container}>
			<View style={styles.header_container}>
				<Pressable onPress={() => navigation.goBack()}>
					<Text style={styles.back}>[</Text>
				</Pressable>
			</View>
			<ScrollView>
				<UserInfo />
				<PreviousGames />
			</ScrollView>
		</View>
	);
};

export default Profile;
