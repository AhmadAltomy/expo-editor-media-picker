import * as ExpoEditorMediaPicker from 'expo-editor-media-picker';
import {
  ExpoEditorMediaPickerAppearance,
  ExpoEditorMediaPickerSelectMode
} from "expo-editor-media-picker/ExpoEditorMediaPicker.types";
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const openPicker = async () => {
    try {
    const result = await ExpoEditorMediaPicker.launchPickerAsync({
      maximumSelectedCount: 1,
      languageType: 'arabic',
      appearanceStyle: ExpoEditorMediaPickerAppearance.dark,
      selectMode: ExpoEditorMediaPickerSelectMode.single,
      selectionTapAction:'openEditor'
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
