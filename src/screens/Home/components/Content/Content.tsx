import { ScrollView, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import theme from 'src/utils/theme';
import ImageLinks from 'src/assets/images/ImageLinks';
import ContentCard from './components/ContentCard';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.brand_color_dark,
		padding: 15,
	},
});

const Content = () => {
	return (
		<ScrollView style={styles.container} contentContainerStyle={{ gap: 13, paddingBottom: 30 }}>
			<ContentCard
				title='Pass and Play'
				description='Play with your friend offline!'
				ImageComponent={<ImageLinks.play_icon width={38} height={38} />}
			/>
			<ContentCard
				title='Solve Puzzles'
				description='Find the right mmove!'
				ImageComponent={<ImageLinks.puzzle_icon width={38} height={38} />}
			/>
			<ContentCard
				title='Play Computer'
				description='Jimmy - Friendly'
				ImageComponent={<Image source={ImageLinks.jimmy} style={{ height: 38, width: 38, borderRadius: 4 }} />}
			/>
			<ContentCard
				title='Take Lessons'
				description='Learn something new!'
				ImageComponent={<ImageLinks.learn_icon width={38} height={38} />}
			/>
		</ScrollView>
	);
};

export default Content;
