import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ejercicio1 } from './src/screens/Ejercicio1';
import { Screen1 } from './src/screens/Screen1';
import { Screen2 } from './src/screens/Screen2';
import { Screen3 } from './src/screens/Screen3';
import { Screen4 } from './src/screens/Screen4';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Ejercicio1></Ejercicio1> */}
      {/* <Screen1></Screen1> */}
      {/* <Screen2></Screen2> */}
      {/* <Screen3></Screen3> */}
      <Screen4></Screen4>
    </SafeAreaView>
  );
}

export default App;
