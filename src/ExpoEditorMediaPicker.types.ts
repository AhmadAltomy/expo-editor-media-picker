
export type ExpoEditorMediaPickerViewProps = {
  name: string;
};

// language
export type ExpoEditorMediaPickerLanguage = "english" | "arabic"

// appearance style
export enum ExpoEditorMediaPickerAppearance {
  "varied" = 0,
  "normal" = 1,
  "dark" = 2,
}

// select options
export enum ExpoEditorMediaPickerSelectOptions {
    "photo" = 0,
    "video" = 1,
    "all" = 2,
}

// select mode
export enum ExpoEditorMediaPickerSelectMode {
    "single" = 0,
    "multiple" = 1,
}

// selection tap action
export type ExpoEditorMediaPickerSelectionTapAction = "preview" | "quickSelect" | "openEditor"

// model presentation style
export enum ExpoEditorMediaPickerModelPresentationStyle {
    fullScreen = 0,
    pageSheet = 1,
    formSheet = 2,
    currentContext = 3,
    custom = 4,
    overFullScreen = 5,
    overCurrentContext = 6,
    popover = 7,
    none = -1,
    automatic = -2,
}

// cancelText
export type ExpoEditorMediaPickerCancelText = string;

// options
export type ExpoEditorMediaPickerOptions = {
  maximumSelectedCount?: number;
  languageType?: ExpoEditorMediaPickerLanguage;
  appearanceStyle?: ExpoEditorMediaPickerAppearance;
  selectOptions?: ExpoEditorMediaPickerSelectOptions;
  selectMode?: ExpoEditorMediaPickerSelectMode;
  selectionTapAction?: ExpoEditorMediaPickerSelectionTapAction;
  modelPresentationStyle?: ExpoEditorMediaPickerModelPresentationStyle;
  cancelText?: ExpoEditorMediaPickerCancelText;
}


