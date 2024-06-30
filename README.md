# expo-editor-media-picker

Expo media image,video picker with editor for React native

## Installation

```sh
npm install expo-editor-media-picker

# for ios
cd ios && pod install
```

## Usage

```tsx
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
```

## API

### `launchPickerAsync(options: MediaPickerOptions): Promise<MediaPickerResult>`
#### `options`
- `maximumSelectedCount` (number)—Maximum number of media items that can be selected. Default is 1.
- `languageType` (string)—Language type for the picker. Default is 'english.'
- `appearanceStyle` (string)—Appearance style for the picker. Default is 'varied.'
- `selectOptions` (string)—Select options for the picker. Default is 'all.'
- `selectMode` (string)—Select mode for the picker. Default is 'single.'
- `selectionTapAction` (string)—Selection tap action for the picker. Default is 'preview.'

## License

MIT
```
License: MIT
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

- AhmadAltomy
