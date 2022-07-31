import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { api, sendFile, testAccessBySerial } from './src/api';

export default function App() {

  console.log('------------------------------------')

  useEffect(() => {
    postFileLog();
  }, [])

  const postFileLog = async () => {
    await api.postAccessBySerial();
    await api.postFile();
    testAccessBySerial();
  }

  return (
    <View style={styles.container}>
      <Text>MonitoriaApi Request</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
