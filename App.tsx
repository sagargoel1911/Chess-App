import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Game from './src/screens/Game/Game';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Game/>
    </SafeAreaView>
  );
}

export default App;
