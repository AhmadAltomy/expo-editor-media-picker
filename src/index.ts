import ExpoEditorMediaPickerModule from './ExpoEditorMediaPickerModule';
import {
  ExpoEditorMediaPickerOptions,
  ExpoEditorMediaPickerViewProps
} from './ExpoEditorMediaPicker.types';



export async function launchPickerAsync(options?:ExpoEditorMediaPickerOptions): Promise<string[]> {
  return await ExpoEditorMediaPickerModule.launchPickerAsync(options);
}




export {  ExpoEditorMediaPickerViewProps,  };
