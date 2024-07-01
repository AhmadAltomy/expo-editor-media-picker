import ExpoModulesCore
import HXPhotoPicker

public class ExpoEditorMediaPickerModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoEditorMediaPicker')` in JavaScript.
    Name("ExpoEditorMediaPicker")

    // Defines a function for open media picker.
      AsyncFunction("launchPickerAsync") { (options:ExpoEditorMediaPickerOptions) in
        // Create an instance of HXPhotoPicker.
        var config = PickerConfiguration.default

        config.maximumSelectedCount = options.maximumSelectedCount
        config.languageType = options.languageType.toHXPickerLanguageType()
        config.appearanceStyle = options.appearanceStyle.toHXPickerLanguageAppearanceStyle()
        config.selectOptions = options.selectOptions.toHXPickerSelectOptions()
        config.selectMode = options.selectMode.toHXPickerSelectMode()
        config.photoSelectionTapAction = options.selectionTapAction.toHXPickerSelectionTapAction()
        config.videoSelectionTapAction = options.selectionTapAction.toHXPickerSelectionTapAction()
        config.modalPresentationStyle =  .fullScreen
          
          if options.selectOptions == .video {
              config.editor.toolsView.toolOptions.remove(at: 2)
              config.editor.toolsView.toolOptions.remove(at: 3)
          }



        let urls: [URL] = try await Photo.picker(config)

        // Convert URLs to strings.
        let urlsString = urls.map { $0.absoluteString }

        // return URLs to JavaScript.
        return urlsString
    }
  }
}
