//
//  ExpoEditorMediaPickerOptions.swift
//  ExpoEditorMediaPicker
//
//  Created by Ahmed Altomy on 30/06/2024.
//

import ExpoModulesCore
import MobileCoreServices
import UIKit
import HXPhotoPicker

internal struct ExpoEditorMediaPickerOptions: Record {
    @Field
    var maximumSelectedCount: Int = 1

    @Field
    var languageType: ExpoEditorMediaPickerLanguageType = .system

    @Field
    var appearanceStyle: ExpoEditorMediaPickerLanguageAppearanceStyle = .varied

    @Field
    var selectOptions: ExpoEditorMediaPickerSelectOptions = .all

    @Field
    var selectMode:ExpoEditorMediaPickerSelectMode = .multiple

    @Field
    var selectionTapAction:ExpoEditorMediaPickerSelectionTapAction = .preview

    @Field
    var minimumSelectedVideoDuration: Int = 0

    @Field
    var maximumSelectedVideoDuration: Int = 0
}



internal enum ExpoEditorMediaPickerSelectOptions: Int,Enumerable {
    case photo = 0

    case video = 1

    case all = 2

    func toHXPickerSelectOptions() -> PickerAssetOptions {
        switch self {
        case .photo:
            return [.photo]
        case .video:
            return [.video]
        case .all:
            return [.photo,.video]
        }
    }
}

internal enum ExpoEditorMediaPickerSelectionTapAction:String,Enumerable {
    case preview
    case quickSelect
    case openEditor

    func toHXPickerSelectionTapAction() -> SelectionTapAction {
        switch self {
        case .preview:
            return .preview
        case .quickSelect:
            return .quickSelect
        case .openEditor:
            return .openEditor
        }
    }
}

internal enum ExpoEditorMediaPickerSelectMode: Int,Enumerable {

    case single = 0

    case multiple = 1

    func toHXPickerSelectMode() -> PickerSelectMode {
        switch self {
        case .single:
            return .single
        case .multiple:
            return .multiple
        }
    }
}

internal enum ExpoEditorMediaPickerLanguageAppearanceStyle: Int,Enumerable {

    case varied = 0

    case normal = 1

    case dark = 2

    func toHXPickerLanguageAppearanceStyle() -> AppearanceStyle {
        switch self {
        case .varied:
            return .varied
        case .normal:
            return .normal
        case .dark:
            return .dark
        }
    }
}



internal enum ExpoEditorMediaPickerLanguageType: String, Enumerable {

    case system

    case simplifiedChinese

    case traditionalChinese

    case japanese

    case korean

    case english

    case thai

    case indonesia

    case vietnamese

    case russian

    case german

    case french

    case arabic

    func toHXPickerLanguageType() -> LanguageType {
        switch self {
        case .system:
            return .system
        case .simplifiedChinese:
            return .simplifiedChinese
        case .traditionalChinese:
            return .traditionalChinese
        case .japanese:
            return .japanese
        case .korean:
            return .korean
        case .english:
            return .english
        case .thai:
            return .thai
        case .indonesia:
            return .indonesia
        case .vietnamese:
            return .vietnamese
        case .russian:
            return .russian
        case .german:
            return .german
        case .french:
            return .french
        case .arabic:
            return .arabic
        }
    }
}
