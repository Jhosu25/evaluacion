import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ejercicio1 } from './src/screens/Ejercicio1';
import { Screen1 } from './src/screens/Screen1';
import { Screen2 } from './src/screens/Screen2';
import { Screen3 } from './src/screens/Screen3';
import { Screen4 } from './src/screens/Screen4';
import { Screen5 } from './src/screens/Screen5';
import { Screen6 } from './src/screens/Screen6';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Ejercicio1></Ejercicio1> */}
      {/* <Screen1></Screen1> */}
      {/* <Screen2></Screen2> */}
      {/* <Screen3></Screen3> */}
      {/* <Screen4></Screen4> */}
      {/* <Screen5></Screen5> */}
      <Screen6></Screen6>
    </SafeAreaView>
  );
}

export default App;
