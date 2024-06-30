import { StyleSheet, Text, View } from 'react-native';

import * as ExpoEditorMediaPicker from 'expo-editor-media-picker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoEditorMediaPicker.hello()}</Text>
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
