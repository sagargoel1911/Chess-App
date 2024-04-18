import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';

import theme from '../../../utils/theme';
import RouteNames from '../navigation/RouteNames';
import TextField from '../../../common/TextField';

const styles = StyleSheet.create({
	top_text: {
		color: theme.colors.white,
		fontFamily: theme.fonts.montserrat_black,
		fontSize: 24,
		textAlign: 'center',
	},
	continue_button: {
		backgroundColor: theme.colors.button_green,
		alignItems: 'center',
		justifyContent: 'center',
		height: 56,
		borderRadius: 8,
		alignSelf: 'stretch',
	},
	continue_text: {
		color: theme.colors.white,
		fontSize: 20,
		fontFamily: theme.fonts.montserrat_extra_bold,
	},

	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	top_section: {
		rowGap: 25,
	},
	continue_button_outer: {
		paddingBottom: 4,
		backgroundColor: theme.colors.button_green_dark,
		borderRadius: 8,
	},
	eye: {
		width: 24,
		height: 18,
		alignSelf: 'center',
	},
	outer: {
		paddingBottom: 24,
		flex: 1,
	},
});

const Password = () => {
	const navigation = useNavigation<any>();
	const { trigger } = useFormContext();

	const on_submit_password = async () => {
		const is_valid = await trigger('password');
		if (is_valid) {
			navigation.navigate(RouteNames.Username);
		}
	};
	return (
		<View style={styles.outer}>
			<KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 130 : 0} style={styles.container}>
				<View style={styles.top_section}>
					<Text style={styles.top_text}>Create a password</Text>
					<TextField name='password' rules={{ required: true }} leftIconText='d' placeholder='Password' eyeOption={true} />
				</View>
				<View style={styles.continue_button_outer}>
					<Pressable style={styles.continue_button} onPress={on_submit_password}>
						<Text style={styles.continue_text}>Continue</Text>
					</Pressable>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

export default Password;
