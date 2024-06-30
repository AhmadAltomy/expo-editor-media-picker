import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoEditorMediaPickerViewProps } from './ExpoEditorMediaPicker.types';

const NativeView: React.ComponentType<ExpoEditorMediaPickerViewProps> =
  requireNativeViewManager('ExpoEditorMediaPicker');

export default function ExpoEditorMediaPickerView(props: ExpoEditorMediaPickerViewProps) {
  return <NativeView {...props} />;
}
