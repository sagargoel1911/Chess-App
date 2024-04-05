import React, { ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import ImageLinks from '../../../../../assets/images/ImageLinks';
import theme from '../../../../../utils/theme';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		columnGap: 15,
	},
	image_view: {
		padding: 4,
		backgroundColor: theme.colors.text_box_color,
		borderRadius: 5,
	},
	image: {
		width: 108,
		height: 108,
		borderRadius: 2,
	},
	right_section: {
		justifyContent: 'center',
		rowGap: 6,
	},
	title: {
		color: theme.colors.white,
		fontSize: 16,
		fontWeight: '700',
	},
	description: {
		color: theme.colors.brand_color_text_light,
	},
});

interface Props {
	title: string;
	description: string;
	ImageComponent: ReactNode;
}

const ContentCard = ({ title, description, ImageComponent }: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.image_view}>
				<Image source={ImageLinks.standard_board} style={styles.image} />
			</View>
			<View style={styles.right_section}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
				{ImageComponent}
			</View>
		</View>
	);
};

export default ContentCard;
