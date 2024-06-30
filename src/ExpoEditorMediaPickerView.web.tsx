import * as React from 'react';

import { ExpoEditorMediaPickerViewProps } from './ExpoEditorMediaPicker.types';

export default function ExpoEditorMediaPickerView(props: ExpoEditorMediaPickerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
