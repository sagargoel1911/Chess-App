import { StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import _ from 'lodash';

import theme from 'src/utils/theme';
import { useAppSelector } from 'src/store';
import { close_toast } from 'src/actions/app';

const styles = StyleSheet.create({
	container: {
		paddingVertical: 16,
		alignItems: 'center',
		backgroundColor: theme.colors.icon_loss,
		borderRadius: 8,
		position: 'absolute',
		zIndex: 10000,
		top: 0,
		alignSelf: 'center',
		paddingHorizontal: 10,
	},
	text: {
		fontSize: 16,
		fontFamily: theme.fonts.montserrat_black,
		color: theme.colors.white,
	},
});

const CustomToastComp = () => {
	const animated_top = useSharedValue(0);

	const { toast_details } = useAppSelector(
		(state) => ({
			toast_details: state.app.toast_details,
		}),
		shallowEqual,
	);
	const { message, duration = 2000 } = toast_details;

	const dispatch = useDispatch();

	const handle_close = () => {
		dispatch(close_toast());
	};

	const animated_style = useAnimatedStyle(() => {
		return {
			top: animated_top.value,
		};
	});

	useEffect(() => {
		animated_top.value = withTiming(70, { duration: 500 });
		setTimeout(() => {
			handle_close();
		}, duration);
	}, []);

	return (
		<Animated.View style={[styles.container, animated_style]}>
			<Text style={styles.text}>{message}</Text>
		</Animated.View>
	);
};

const CustomToast = () => {
	const { toast_details } = useAppSelector(
		(state) => ({
			toast_details: state.app.toast_details,
		}),
		shallowEqual,
	);

	const { is_open } = toast_details;

	if (!is_open) {
		return null;
	}
	return <CustomToastComp />;
};

export default CustomToast;
