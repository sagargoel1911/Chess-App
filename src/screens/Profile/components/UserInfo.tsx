import { Image, ImageBackground, Text, View } from 'react-native';
import theme from '../../../utils/theme';
import ImageLinks from '../../../assets/images/ImageLinks';

const UserInfo = () => {
	return (
		<View style={{ height: 130, backgroundColor: theme.colors.brand_color_extra_dark, paddingHorizontal: 15, gap: 15 }}>
			<View
				style={{
					height: 80,
					flexDirection: 'row',
					gap: 15,
				}}>
				{/* <View style={{ borderRadius: 200, backgroundColor: 'red', width: 100, height: 80 }}>
					<ImageLinks.profile_pic width={80} height={80} style={{ borderRadius: 200, overflow: 'hidden' }} />
				</View> */}
				<Image
					source={{
						uri: 'https://images.chesscomfiles.com/uploads/v1/user/34390610.d6259d8b.161x161o.e3c0ff243a67@2x.jpeg',
					}}
					style={{ width: 80, height: 80, borderRadius: 20 }}
				/>
				<View style={{ justifyContent: 'space-between' }}>
					<Text
						style={{
							fontFamily: theme.fonts.roboto,
							color: theme.colors.white,
							fontSize: 24,
							fontWeight: 'bold',
						}}>
						sagargoel19
					</Text>

					<View>
						<ImageBackground source={ImageLinks.flags} width={100} height={100} />
						<Text style={{ color: theme.colors.brand_color_text_light }}>India</Text>
					</View>
				</View>
			</View>
			<Text style={{ color: theme.colors.brand_color_text_light }}>Joined Apr 10, 2024</Text>
		</View>
	);
};

export default UserInfo;
