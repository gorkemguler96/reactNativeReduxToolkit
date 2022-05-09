import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {store} from "./redux/store";
import { Provider,useSelector } from "react-redux";
import Counter from './src/components/counter'


export default function App() {


  return (
      <View style={styles.container}>
          <Provider store={store}>
              <View>
                  <Counter/>
                  <StatusBar style="auto" />
              </View>
          </Provider>
      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
