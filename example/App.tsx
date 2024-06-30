import * as ExpoEditorMediaPicker from 'expo-editor-media-picker';
import {Button, StyleSheet,  View} from 'react-native';

export default function App() {
  const openPicker = async () => {
    try {
    const result = await ExpoEditorMediaPicker.launchPickerAsync({
      maximumSelectedCount: 1,
    });
      console.log(result);
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <Button title={'Open Picker'} onPress={openPicker} />
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
