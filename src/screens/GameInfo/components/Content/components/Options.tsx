import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from '../../../../../utils/theme';

const styles = StyleSheet.create({
	container: {
		paddingVertical: 17,
		backgroundColor: theme.colors.brand_color_extra_dark,
		paddingHorizontal: 16,
		gap: 32,
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		color: theme.colors.brand_color_text_light,
		fontSize: 16,
	},
});

interface Props {
	title: string;
	CurrentOption: ReactNode;
	BelowComponent: ReactNode;
}

const Options = ({ title, CurrentOption, BelowComponent }: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.title}>{title}</Text>
				{CurrentOption}
			</View>
			{BelowComponent}
		</View>
	);
};

export default Options;
