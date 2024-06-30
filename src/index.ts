import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoEditorMediaPicker.web.ts
// and on native platforms to ExpoEditorMediaPicker.ts
import ExpoEditorMediaPickerModule from './ExpoEditorMediaPickerModule';
import ExpoEditorMediaPickerView from './ExpoEditorMediaPickerView';
import { ChangeEventPayload, ExpoEditorMediaPickerViewProps } from './ExpoEditorMediaPicker.types';

// Get the native constant value.
export const PI = ExpoEditorMediaPickerModule.PI;

export function hello(): string {
  return ExpoEditorMediaPickerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoEditorMediaPickerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoEditorMediaPickerModule ?? NativeModulesProxy.ExpoEditorMediaPicker);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoEditorMediaPickerView, ExpoEditorMediaPickerViewProps, ChangeEventPayload };
