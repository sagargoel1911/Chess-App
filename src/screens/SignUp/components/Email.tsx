import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';

import theme from 'src/utils/theme';
import RouteNames from '../navigation/RouteNames';
import TextField from 'src/common/TextField';
import { FORM_ELEMENTS } from '../constants';

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
	outer: {
		paddingBottom: 24,
		flex: 1,
	},
});

const Email = () => {
	const navigation = useNavigation<any>();
	const { trigger } = useFormContext();

	const on_submit_email = async () => {
		const is_valid = await trigger(FORM_ELEMENTS.email);
		if (is_valid) navigation.navigate(RouteNames.Password);
	};

	return (
		<View style={styles.outer}>
			<KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 130 : 0} style={styles.container}>
				<View style={styles.top_section}>
					<Text style={styles.top_text}>What is your email?</Text>
					<TextField
						name={FORM_ELEMENTS.email}
						placeholder='Email'
						leftIconText='u'
						rules={{
							email: true,
							required: true,
							signup: true,
						}}
						label='Email'
					/>
				</View>
				<View style={styles.continue_button_outer}>
					<Pressable style={styles.continue_button} onPress={on_submit_email}>
						<Text style={styles.continue_text}>Continue</Text>
					</Pressable>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

export default Email;
