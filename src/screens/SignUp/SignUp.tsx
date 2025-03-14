import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import theme from 'src/utils/theme';
import SignUpStack from './navigation/SignUpStack';
import Header from './components/Header';
import { FORM_ELEMENTS } from './constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_dark,
	},
});

const SignUp = () => {
	const [nav, set_nav] = useState<any>();
	const methods = useForm<any>({
		defaultValues: {
			[FORM_ELEMENTS.email]: '',
			[FORM_ELEMENTS.password]: '',
			[FORM_ELEMENTS.username]: '',
			[FORM_ELEMENTS.profile_picture]: null,
		},
	});

	const update_nav = (new_nav: any): void => {
		set_nav(new_nav);
	};
	return (
		<View style={styles.container}>
			<Header nav={nav} />
			<FormProvider {...methods}>
				<SignUpStack update_nav={update_nav} />
			</FormProvider>
		</View>
	);
};

export default SignUp;
