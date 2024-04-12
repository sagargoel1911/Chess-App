import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import theme from '../../../utils/theme';
import ImageLinks from '../../../assets/images/ImageLinks';

const styles = StyleSheet.create({
	container: {
		height: 130,
		backgroundColor: theme.colors.brand_color_extra_dark,
		paddingHorizontal: 15,
		gap: 15,
	},
	info: {
		height: 80,
		flexDirection: 'row',
		gap: 15,
	},
	profile_pic: {
		width: 80,
		height: 80,
		borderRadius: 2,
		overflow: 'hidden',
	},
	name_country: {
		justifyContent: 'space-between',
	},
	name: {
		fontFamily: theme.fonts.roboto,
		color: theme.colors.white,
		fontSize: 24,
	},
	country: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingBottom: 2,
	},
	flag_container: {
		width: 25,
		height: 19,
		overflow: 'hidden',
	},
	flag_pic: {
		width: 330,
		height: 631,
		top: -220,
		left: -91,
	},
	country_name: {
		color: theme.colors.brand_color_text_light,
	},
	join_date: {
		color: theme.colors.brand_color_text_light,
	},
});

const UserInfo = () => {
	return (
		<View style={styles.container}>
			<View style={styles.info}>
				<ImageBackground source={ImageLinks.profile_pic} style={styles.profile_pic} />
				<View style={styles.name_country}>
					<Text style={styles.name}>sagargoel19</Text>

					<View style={styles.country}>
						<ImageBackground source={ImageLinks.flags} style={styles.flag_container} imageStyle={styles.flag_pic} />
						<Text style={styles.country_name}>India</Text>
					</View>
				</View>
			</View>
			<Text style={styles.join_date}>Joined Apr 10, 2024</Text>
		</View>
	);
};

export default UserInfo;
