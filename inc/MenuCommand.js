/**
 * MenuCommand object for executing Adobe Illustrator menu commands.
 * @param {String}  kCommandStr
 * @param {Boolean} runImmediately
 * @constructor
 */
var MenuCommand = function(kCommandStr, runImmediately) {

    /**
     * The Application object
     * @type {Object} APP    The Adobe Illustrator app reference.
     */
    var APP = app;

    /**
     * The command string
     * @type {string}
     this.kCommandStr = kCommandStr;

     /**
     * The Command string
     * @type {string}
     */
    var command_id = kCommandStr.toLowerCase().replace(/\s/g);

    /**
     * Logger object
     * @type {Logger}
     */
    this.logger = new Logger(command_id, "~/logs/" + command_id);

    /**
     * Available Menu commands
     * @type {Object}
     */
    this.commands = {
        /**
         * File:New
         */
        kNewCommandStr : "new",

        /**
         * File:New from Template
         */
        kNewFromTemplateCommandStr : "newFromTemplate",

        /**
         * File:Open
         */
        kOpenCommandStr : "open",

        /**
         * File:Browse in Bridge
         */
        kAdobeBridgeBrowseCommandStr : "Adobe Bridge Browse",

        /**
         * File:Device Central
         */
        kAdobeAIDeviceCenterCommandStr : "Adobe AI Device center",

        /**
         * File:Close
         */
        kCloseCommandStr : "close",

        /**
         * File:Save
         */
        kSaveCommandStr : "save",

        /**
         * File:Save As
         */
        kSaveasCommandStr : "saveas",

        /**
         * File:Save a Copy
         */
        kSaveacopyCommandStr : "saveacopy",

        /**
         * File:Save as Template
         */
        kSaveastemplateCommandStr : "saveastemplate",

        /**
         * File:Save for Web & Devices
         */
        kAdobeAISaveForWebCommandStr : "Adobe AI Save For Web",

        /**
         * File:Save Selected Slices
         */
        kAdobeAISaveSelectedSlicesCommandStr : "Adobe AI Save Selected Slices",

        /**
         * File:Revert
         */
        kRevertCommandStr : "revert",

        /**
         * File:Place
         */
        kAIPlaceCommandStr : "AI Place",

        /**
         * File:Export
         */
        kExportCommandStr : "export",

        /**
         * File:Export Selection
         */
        kExportSelectionCommandStr : "exportSelection",

        /**
         * File:Export/Export For Screens
         */
        kExportForScreensCommandStr : "exportForScreens",

        /**
         * File:Scripts:Other Script
         */
        kAiBrowseForScriptCommandStr : "ai_browse_for_script",

        /**
         * File:Document Setup
         */
        kDocumentCommandStr : "document",

        /**
         * File:Document Color Mode:CMYK Color
         */
        kCommandStr : "doc-color-cmyk",

        /**
         * File:Document Color Mode:RGB Color
         */
        kDocColorRgbCommandStr : "doc-color-rgb",

        /**
         * File:File Info
         */
        kFileInfoCommandStr : "File Info",

        /**
         * File:Print
         */
        kPrintCommandStr : "Print",

        /**
         * File:Exit
         */
        kQuitCommandStr : "quit",

        /**
         * Edit:Undo
         */
        kUndoCommandStr : "undo",

        /**
         * Edit:Redo
         */
        kRedoCommandStr : "redo",

        /**
         * Edit:Cut
         */
        kCutCommandStr : "cut",

        /**
         * Edit:Copy
         */
        kCopyCommandStr : "copy",

        /**
         * Edit:Paste
         */
        kPasteCommandStr : "paste",

        /**
         * Edit:Paste in Front
         */
        kPasteFrontCommandStr : "pasteFront",

        /**
         * Edit:Paste in Back
         */
        kCommandStr : "pasteBack",

        /**
         * Edit:Paste in Place
         */
        kPasteInPlaceCommandStr : "pasteInPlace",

        /**
         * Edit:Paste on All Artboards
         */
        kPasteInAllArtboardCommandStr : "pasteInAllArtboard",

        /**
         * Edit:Clear
         */
        kClearCommandStr : "clear",

        /**
         * Edit:Find & Replace
         */
        kFindAndReplaceCommandStr : "Find and Replace",

        /**
         * Edit:Find Next
         */
        kFindNextCommandStr : "Find Next",

        /**
         * Edit:Check Spelling
         */
        kSpellingCommandStr : "Check Spelling",

        /**
         * Edit:Edit Custom Dictionary
         */
        kEditCustomDictionaryCommandStr : "Edit Custom Dictionary...",

        /**
         * Edit:Define Pattern
         */
        kDefinePatternMenuItemCommandStr : "Define Pattern Menu Item",

        /**
         * Edit:Edit Colors:Recolor Artwork
         */
        kRecolorArtDialogCommandStr : "Recolor Art Dialog",

        /**
         * Edit:Edit Colors:Adjust Color Balance
         */
        kAdjust3CommandStr : "Adjust3",

        /**
         * Edit:Edit Colors:Blend Front to Back
         */
        kColors3CommandStr : "Colors3",

        /**
         * Edit:Edit Colors:Blend Horizontally
         */
        kColors4CommandStr : "Colors4",

        /**
         * Edit:Edit Colors:Blend Vertically
         */
        kColors5CommandStr : "Colors5",

        /**
         * Edit:Edit Colors:Convert to CMYK
         */
        kColors8CommandStr : "Colors8",

        /**
         * Edit:Edit Colors:Convert to Grayscale
         */
        kColors7CommandStr : "Colors7",

        /**
         * Edit:Edit Colors:Convert to RGB
         */
        kColors9CommandStr : "Colors9",

        /**
         * Edit:Edit Colors:Invert Colors
         */
        kColors6CommandStr : "Colors6",

        /**
         * Edit:Edit Colors:Overprint Black
         */
        kOverprint2CommandStr : "Overprint2",

        /**
         * Edit:Edit Colors:Saturate
         */
        kSaturate3CommandStr : "Saturate3",

        /**
         * Edit:Edit Original
         */
        kEditOriginalMenuItemCommandStr : "EditOriginal Menu Item",

        /**
         * Edit:Transparency Flattener Presets
         */
        kTransparencyPresetsCommandStr : "Transparency Presets",

        /**
         * Edit:Tracing Presets
         */
        kTracingPresetsCommandStr : "TracingPresets",

        /**
         * Edit:Print Presets
         */
        kPrintPresetsCommandStr : "Print Presets",

        /**
         * Edit:Adobe PDF Presets
         */
        kPDFPresetsCommandStr : "PDF Presets",

        /**
         * Edit:SWF Presets
         */
        kSWFPresetsCommandStr : "SWFPresets",

        /**
         * Edit:Perspective Grid Presets
         */
        kPerspectiveGridPresetsCommandStr : "PerspectiveGridPresets",

        /**
         * Edit:Color Settings
         */
        kColorCommandStr : "color",

        /**
         * Edit:Assign Profile
         */
        kAssignprofileCommandStr : "assignprofile",

        /**
         * Edit:Keyboard Shortcuts
         */
        kBSCMenuItemCommandStr : "KBSC Menu Item",

        /**
         * Edit:Run AAT Test
         */
        kAATMenuItemCommandStr : "AAT Menu Item",

        /**
         * Edit:Edit AAT Script
         */
        kLastAATMenuItemCommandStr : "Last AAT Menu Item",

        /**
         * Edit:Abort AAT Script
         */
        kAbortAATMenuItemCommandStr : "Abort AAT Menu Item",

        /**
         * Edit:Preferences:General
         */
        kPreferenceCommandStr : "preference",

        /**
         * Edit:Preferences:Selection & Anchor Display
         */
        kSelectPrefCommandStr : "selectPref",

        /**
         * Edit:Preferences:Type
         */
        keyboardPrefCommandStr : "keyboardPref",

        /**
         * Edit:Preferences:Units
         */
        kUnitundoPrefCommandStr : "unitundoPref",

        /**
         * Edit:Preferences:Guides & Grid
         */
        kGuidegridPrefCommandStr : "guidegridPref",

        /**
         * Edit:Preferences:Smart Guides
         */
        kSnapPrefCommandStr : "snapPref",

        /**
         * Edit:Preferences:Slices
         */
        kSlicePrefCommandStr : "slicePref",

        /**
         * Edit:Preferences:Hyphenation
         */
        kHyphenPrefCommandStr : "hyphenPref",

        /**
         * Edit:Preferences:Plug-ins & Scratch Disks
         */
        kPluginPrefCommandStr : "pluginPref",

        /**
         * Edit:Preferences:User Interface
         */
        kUIPrefCommandStr : "UIPref",

        /**
         * Edit:Preferences:File Handling & Clipboard
         */
        kFileClipboardPrefCommandStr : "FileClipboardPref",

        /**
         * Edit:Preferences:Appearance of Black
         */
        kPrefCommandStr : "BlackPref",

        /**
         * Object:Transform:Transform Again
         */
        kTransformagainCommandStr : "transformagain",

        /**
         * Object:Transform:Move
         */
        kTransformmoveCommandStr : "transformmove",

        /**
         * Object:Transform:Rotate
         */
        kTransformrotateCommandStr : "transformrotate",

        /**
         * Object:Transform:Reflect
         */
        kTransformreflectCommandStr : "transformreflect",

        /**
         * Object:Transform:Scale
         */
        kTransformscaleCommandStr : "transformscale",

        /**
         * Object:Transform:Shear
         */
        kTransformshearCommandStr : "transformshear",

        /**
         * Object:Transform Each
         */
        kTransformEachCommandStr : "Transform v23",

        /**
         * Object:Transform:Reset Bounding Box
         */
        kAIResetBoundingBoxCommandStr : "AI Reset Bounding Box",

        /**
         * Object:Arrange:Bring to Front
         */
        kSendToFrontCommandStr : "sendToFront",

        /**
         * Object:Arrange:Bring Forward
         */
        kSendForwardCommandStr : "sendForward",

        /**
         * Object:Arrange:Send Backward
         */
        kwardCommandStr : "sendBackward",

        /**
         * Object:Arrange:Send to Back
         */
        kCommandStr : "sendToBack",

        /**
         * Object:Arrange:Send to Current Layer
         */
        kSelectionHat2CommandStr : "Selection Hat 2",

        /**
         * Object:Group
         */
        kGroupCommandStr : "group",

        /**
         * Object:Ungroup
         */
        kUngroupCommandStr : "ungroup",

        /**
         * Object:Lock:Selection
         */
        kCommandStr : "lock",

        /**
         * Object:Lock:All Artwork Above
         */
        kSelectionHat5CommandStr : "Selection Hat 5",

        /**
         * Object:Lock:Other Layers
         */
        kSelectionHat7CommandStr : "Selection Hat 7",

        /**
         * Object:Unlock All
         */
        kAllCommandStr : "unlockAll",

        /**
         * Object:Hide:Selection
         */
        kHideCommandStr : "hide",

        /**
         * Object:Hide:All Artwork Above
         */
        kSelectionHat4CommandStr : "Selection Hat 4",

        /**
         * Object:Hide:Other Layers
         */
        kSelectionHat6CommandStr : "Selection Hat 6",

        /**
         * Object:Show All
         */
        kShowAllCommandStr : "showAll",

        /**
         * Object:Expand
         */
        kExpand3CommandStr : "Expand3",

        /**
         * Object:Expand Appearance
         */
        kExpandStyleCommandStr : "expandStyle",

        /**
         * Object:Flatten Transparency
         */
        kFlattenTransparency1CommandStr : "FlattenTransparency1",

        /**
         * Object:Rasterize
         */
        kRasterize8MenuItemCommandStr : "Rasterize 8 menu item",

        /**
         * Object:Create Gradient Mesh
         */
        kCreateGradientMeshCommandStr : "make mesh",

        /**
         * Object:Create Object Mosaic
         */
        kAIObjectMosaicPlugIn4CommandStr : "AI Object Mosaic Plug-in4",

        /**
         * Object:Create Trim Marks
         */
        kV25CommandStr : "TrimMark v25",

        /**
         * Object:Slice:Make
         */
        keSliceCommandStr : "AISlice Make Slice",

        /**
         * Object:Slice:Release
         */
        kAISliceReleaseSliceCommandStr : "AISlice Release Slice",

        /**
         * Object:Slice:Create from Guides
         */
        kAISliceCreateFromGuidesCommandStr : "AISlice Create from Guides",

        /**
         * Object:Slice:Create from Selection
         */
        kAISliceCreateFromSelectionCommandStr : "AISlice Create from Selection",

        /**
         * Object:Slice:Duplicate Slice
         */
        kAISliceDuplicateCommandStr : "AISlice Duplicate",

        /**
         * Object:Slice:Combine Slices
         */
        kAISliceCombineCommandStr : "AISlice Combine",

        /**
         * Object:Slice:Divide Slices
         */
        kAISliceDivideCommandStr : "AISlice Divide",

        /**
         * Object:Slice:Delete All
         */
        kAISliceDeleteAllSlicesCommandStr : "AISlice Delete All Slices",

        /**
         * Object:Slice:Slice Options
         */
        kAISliceSliceOptionsCommandStr : "AISlice Slice Options",

        /**
         * Object:Slice:Clip to Artboard
         */
        kAISliceClipToArtboardCommandStr : "AISlice Clip to Artboard",

        /**
         * Object:Path:Join
         */
        kJoinCommandStr : "join",

        /**
         * Object:Path:Average
         */
        kAverageCommandStr : "average",

        /**
         * Object:Path:Outline Stroke
         */
        kOffsetPathV22CommandStr : "OffsetPath v22",

        /**
         * Object:Path:Offset Path
         */
        kOffsetPathV23CommandStr : "OffsetPath v23",

        /**
         * Object:Path:Simplify
         */
        kSimplifyCommandStr : "simplify menu item",

        /**
         * Object:Path:Add Anchor Points
         */
        kAddAnchorPoints2CommandStr : "Add Anchor Points2",

        /**
         * Object:Path:Remove Anchor Points
         */
        kRemoveAnchorPointsMenuCommandStr : "Remove Anchor Points menu",

        /**
         * Object:Path:Divide Objects Below
         */
        knifeTool2CommandStr : "Knife Tool2",

        /**
         * Object:Path:Split Into Grid
         */
        kRowsAndColumnsCommandStr : "Rows and Columns....",

        /**
         * Object:Path:Clean Up
         */
        kCleanupMenuItemCommandStr : "cleanup menu item",

        /**
         * Object:Blend:Make
         */
        keCommandStr : "Path Blend Make",

        /**
         * Object:Blend:Release
         */
        kBlendReleaseCommandStr : "Path Blend Release",

        /**
         * Object:Blend:Expand
         */
        kBlendExpandCommndStr : "Path Blend Expand",

        /**
         * Object:Blend:Blend Options
         */
        kBlendOptionsCommandStr : "Path Blend Options",

        /**
         * Object:Blend:Replace Spine
         */
        kBlendReplaceSpineCommandStr : "Path Blend Replace Spine",

        /**
         * Object:Blend:Reverse Spine
         */
        kBlendReverseSpineCommandStr : "Path Blend Reverse Spine",

        /**
         * Object:Blend:Reverse Front to Back
         */
        kCommandStr : "Path Blend Reverse Stack",

        /**
         * Object:Envelope Distort:Make with Warp
         */
        keWarpCommandStr : "Make Warp",

        /**
         * Object:Envelope Distort:Make with Mesh
         */
        kCreateEnvelopeGridCommandStr : "Create Envelope Grid",

        /**
         * Object:Envelope Distort:Make with Top Object
         */
        keEnvelopeCommandStr : "Make Envelope",

        /**
         * Object:Envelope Distort:Release
         */
        kReleaseEnvelopeCommandStr : "Release Envelope",

        /**
         * Object:Envelope Distort:Envelope Options
         */
        kEnvelopeOptionsCommandStr : "Envelope Options",

        /**
         * Object:Envelope Distort:Expand
         */
        kExpandEnvelopeCommandStr : "Expand Envelope",

        /**
         * Object:Envelope Distort:Edit Contents
         */
        kEditEnvelopeContentsCommandStr : "Edit Envelope Contents",

        /**
         * Object:Perspective:Attach to Active Plane
         */
        kAttachToActivePlaneCommandStr : "Attach to Active Plane",

        /**
         * Object:Perspective:Release with Perspective
         */
        kReleaseWithPerspectiveCommandStr : "Release with Perspective",

        /**
         * Object:Perspective:Move Plane to Match Object
         */
        kShowObjectGridPlaneCommandStr : "Show Object Grid Plane",

        /**
         * Object:Perspective:Edit Text
         */
        kEditOriginalObjectCommandStr : "Edit Original Object",

        /**
         * Object:Live Paint:Make
         */
        kePlanetXCommandStr : "Make Planet X",

        /**
         * Object:Live Paint:Merge
         */
        kMargePlanetXCommandStr : "Marge Planet X",

        /**
         * Object:Live Paint:Release
         */
        kReleasePlanetXCommandStr : "Release Planet X",

        /**
         * Object:Live Paint:Gap Options
         */
        kPlanetXOptionsCommandStr : "Planet X Options",

        /**
         * Object:Live Paint:Expand
         */
        kExpandPlanetXCommandStr : "Expand Planet X",

        /**
         * Object:Live Trace:Make
         */
        keTracingCommandStr : "Make Tracing",

        /**
         * Object:Live Trace:Make and Expand
         */
        keAndExpandCommandStr : "Make and Expand",

        /**
         * Object:Live Trace:Make and Convert to Live Paint
         */
        keAndConvertToLivePaintCommandStr : "Make and Convert to Live Paint",

        /**
         * Object:Live Trace:Release
         */
        kReleaseTracingCommandStr : "Release Tracing",

        /**
         * Object:Live Trace:Tracing Options
         */
        kTracingOptionsCommandStr : "Tracing Options",

        /**
         * Object:Live Trace:Expand
         */
        kExpandTracingCommandStr : "Expand Tracing",

        /**
         * Object:Live Trace:Expand as Viewed
         */
        kExpandAsViewedCommandStr : "Expand as Viewed",

        /**
         * Object:Live Trace:Convert to Live Paint
         */
        kPaintTracingCommandStr : "Paint Tracing",

        /**
         * Object:Live Trace:Show No Image
         */
        kShowNoImageCommandStr : "ShowNoImage",

        /**
         * Object:Live Trace:Show Original Image
         */
        kShowOriginalImageCommandStr : "ShowOriginalImage",

        /**
         * Object:Live Trace:Show Adjusted Image
         */
        kShowPreprocessedImageCommandStr : "Show Preprocessed Image",

        /**
         * Object:Live Trace:Show Transparent Image
         */
        kShowTransparentImageCommandStr : "ShowTransparentImage",

        /**
         * Object:Live Trace:Show No Tracing Result
         */
        kCommandStr : "ShowNoArtwork",

        /**
         * Object:Live Trace:Show Tracing Result
         */
        kCommandStr : "ShowArtwork",

        /**
         * Object:Live Trace:Show Outlines
         */
        kShowPathsCommandStr : "ShowPaths",

        /**
         * Object:Live Trace:Show Outlines with Tracing
         */
        kCommandStr : "ShowPathsAndTransparentArtwork",

        /**
         * Object:Text Wrap:Make
         */
        keTextWrapCommandStr : "Make Text Wrap",

        /**
         * Object:Text Wrap:Release
         */
        kReleaseTextWrapCommandStr : "Release Text Wrap",

        /**
         * Object:Text Wrap:Text Wrap Options
         */
        kTextWrapOptionsCommandStr : "Text Wrap Options...",

        /**
         * Object:Clipping Mask:Make
         */
        kCommandStr : "makeMask",

        /**
         * Object:Clipping Mask:Release
         */
        kCommandStr : "releaseMask",

        /**
         * Object:Clipping Mask:Edit Contents
         */
        kCommandStr : "editMask",

        /**
         * Object:Compound Path:Make
         */
        kCompoundPathCommandStr : "compoundPath",

        /**
         * Object:Compound Path:Release
         */
        kNoCompoundPathCommandStr : "noCompoundPath",

        /**
         * Object:Artboards:Convert to Artboards
         */
        ksCommandStr : "setCropMarks",

        /**
         * Object:Artboards:Rearrange
         */
        kReArrangeArtboardsCommandStr : "ReArrange Artboards",

        /**
         * Object:Artboards:Fit to Artwork Bounds
         */
        kBoundsCommandStr : "Fit Artboard to artwork bounds",

        /**
         * Object:Artboards:Fit to Selected Art
         */
        kFitArtboardToSelectedArtCommandStr : "Fit Artboard to selected Art",

        /**
         * Object:Graph:Type
         */
        kSetGraphStyleCommandStr : "setGraphStyle",

        /**
         * Object:Graph:Data
         */
        kEditGraphDataCommandStr : "editGraphData",

        /**
         * Object:Graph:Design
         */
        kGraphDesignsCommandStr : "graphDesigns",

        /**
         * Object:Graph:Column
         */
        kSetBarDesignCommandStr : "setBarDesign",

        /**
         * Object:Graph:Marker
         */
        kSetIconDesignCommandStr : "setIconDesign",

        /**
         * Type:Glyphs
         */
        kAlternateGlyphPalettePluginCommandStr : "alternate glyph palette plugin",

        /**
         * Type:Area Type Options
         */
        kAreaTypeOptionsCommandStr : "area-type-options",

        /**
         * Type:Type on a Path:Rainbow
         */
        kRainbowTOPCommandStr : "Rainbow",

        /**
         * Type:Type on a Path:3D Ribbon
         */
        k3DRibbonTOPCommandStr : "3D ribbon",

        /**
         * Type:Type on a Path:Skew
         */
        kewTOPCommandStr : "Skew",

        /**
         * Type:Type on a Path:Stair Step
         */
        kStairTOPCommandStr : "Stair Step",

        /**
         * Type:Type on a Path:Gravity
         */
        kGravityTOPCommandStr : "Gravity",

        /**
         * Type:Type on a Path:Type on a path Options
         */
        kTOPOptionsCommandStr : "typeOnPathOptions",

        /**
         * Type:Type on a Path:Update Legacy Type on a Path
         */
        kUpdateLegacyTOPCommandStr : "updateLegacyTOP",

        /**
         * Type:Threaded Text:Create
         */
        kThreadTextCreateCommandStr : "threadTextCreate",

        /**
         * Type:Threaded Text:Release Selection
         */
        kReleaseThreadedTextSelectionCommandStr : "releaseThreadedTextSelection",

        /**
         * Type:Threaded Text:Remove Threading
         */
        kRemoveThreadingCommandStr : "removeThreading",

        /**
         * Type:Composite Fonts
         */
        kAdobeInternalCompositeFontPluginCommandStr : "Adobe internal composite font plugin",

        /**
         * Type:Kinsoku Shori Settings
         */
        kuSettingsCommandStr : "Adobe Kinsoku Settings",

        /**
         * Type:Mojikumi Settings
         */
        kumiSettingsCommandStr : "Adobe MojiKumi Settings",

        /**
         * Type:Fit Headline
         */
        kFitHeadlineCommandStr : "fitHeadline",

        /**
         * Type:Create Outlines
         */
        kOutlineCommandStr : "outline",

        /**
         * Type:Find Font
         */
        kAdobeIllustratorFindFontMenuItemCommandStr : "Adobe Illustrator Find Font Menu Item",

        /**
         * Type:Change Case:UPPERCASE
         */
        kUpperCaseChangeCaseItemCommandStr : "UpperCase Change Case Item",

        /**
         * Type:Change Case:lowercase
         */
        kLowerCaseChangeCaseItemCommandStr : "LowerCase Change Case Item",

        /**
         * Type:Change Case:Title Case
         */
        kTitleCaseChangeCaseItemCommandStr : "Title Case Change Case Item",

        /**
         * Type:Change Case:Sentence case
         */
        kSentenceCaseChangeCaseItemCommandStr : "Sentence case Change Case Item",

        /**
         * Type:Smart Punctuation
         */
        kAdobeIllustratorSmartPunctuationMenuItemCommandStr : "Adobe Illustrator Smart Punctuation Menu Item",

        /**
         * Type:Optical Margin Alignment
         */
        kAdobeOpticalAlignmentItemCommandStr : "Adobe Optical Alignment Item",

        /**
         * Type:Show Hidden Characters
         */
        kShowHiddenCharCommandStr : "showHiddenChar",

        /**
         * Type:Type Orientation:Horizontal
         */
        kTypeHorizontalCommandStr : "type-horizontal",

        /**
         * Type:Type Orientation:Vertical
         */
        kTypeVerticalCommandStr : "type-vertical",

        /**
         * Select:All
         */
        kSelectallCommandStr : "selectall",

        /**
         * Select:All on Active Artboard
         */
        kSelectallinartboardCommandStr : "selectallinartboard",

        /**
         * Select:Deselect
         */
        kDeselectallCommandStr : "deselectall",

        /**
         * Select:Reselect
         */
        kFindReselectMenuItemCommandStr : "Find Reselect menu item",

        /**
         * Select:Inverse
         */
        kInverseMenuItemCommandStr : "Inverse menu item",

        /**
         * Select:Next Object Above
         */
        kSelectionHat8CommandStr : "Selection Hat 8",

        /**
         * Select:Next Object Below
         */
        kSelectionHat9CommandStr : "Selection Hat 9",

        /**
         * Select:Same:Appearance
         */
        kFindAppearanceMenuItemCommandStr : "Find Appearance menu item",

        /**
         * Select:Same:Appearance Attribute
         */
        kFindAppearanceAttributesMenuItemCommandStr : "Find Appearance Attributes menu item",

        /**
         * Select:Same:Blending Mode
         */
        kFindBlendingModeMenuItemCommandStr : "Find Blending Mode menu item",

        /**
         * Select:Same:Fill & Stroke
         */
        keMenuItemCommandStr : "Find Fill & Stroke menu item",

        /**
         * Select:Same:Fill Color
         */
        kFindFillColorMenuItemCommandStr : "Find Fill Color menu item",

        /**
         * Select:Same:Opacity
         */
        kFindOpacityMenuItemCommandStr : "Find Opacity menu item",

        /**
         * Select:Same:Stroke Color
         */
        keColorMenuItemCommandStr : "Find Stroke Color menu item",

        /**
         * Select:Same:Stroke Weight
         */
        keWeightMenuItemCommandStr : "Find Stroke Weight menu item",

        /**
         * Select:Same:Graphic Style
         */
        kFindStyleMenuItemCommandStr : "Find Style menu item",

        /**
         * Select:Same:Symbol Instance
         */
        kFindSymbolInstanceMenuItemCommandStr : "Find Symbol Instance menu item",

        /**
         * Select:Same:Link Block Series
         */
        kSeriesMenuItemCommandStr : "Find Link Block Series menu item",

        /**
         * Select:Object:All on Same Layers
         */
        kSelectionHat3CommandStr : "Selection Hat 3",

        /**
         * Select:Object:Direction Handles
         */
        kSelectionHat1CommandStr : "Selection Hat 1",

        /**
         * Select:Object:Not Aligned to Pixel Grid
         */
        kSelectionHat12CommandStr : "Selection Hat 12",

        /**
         * Select:Object:Bristle Brush Strokes
         */
        kesMenuItemCommandStr : "Bristle Brush Strokes menu item",

        /**
         * Select:Object:Brush Strokes
         */
        kesMenuItemCommandStr : "Brush Strokes menu item",

        /**
         * Select:Object:Clipping Masks
         */
        ksMenuItemCommandStr : "Clipping Masks menu item",

        /**
         * Select:Object:Stray Points
         */
        kStrayPointsMenuItemCommandStr : "Stray Points menu item",

        /**
         * Select:Object:Text Objects
         */
        kTextObjectsMenuItemCommandStr : "Text Objects menu item",

        /**
         * Select:Object:Flash Dynamic Text
         */
        kDynamicTextCommandStr : "Dynamic Text",

        /**
         * Select:Object:Flash Input Text
         */
        kInputTextCommandStr : "Input Text",

        /**
         * Select:Save Selection
         */
        kSelectionHat10CommandStr : "Selection Hat 10",

        /**
         * Select:Edit Selection
         */
        kSelectionHat11CommandStr : "Selection Hat 11",

        /**
         * Effect:Apply Last Effect
         */
        kAdobeApplyLastEffectCommandStr : "Adobe Apply Last Effect",

        /**
         * Effect:Last Effect
         */
        kAdobeLastEffectCommandStr : "Adobe Last Effect",

        /**
         * Effect:Document Raster Effects Settings
         */
        kLiveRasterizeEffectSettingCommandStr : "Live Rasterize Effect Setting",

        /**
         * Effect:3D:Extrude & Bevel
         */
        kLive3DExtrudeCommandStr : "Live 3DExtrude",

        /**
         * Effect:3D:Revolve
         */
        kLive3DRevolveCommandStr : "Live 3DRevolve",

        /**
         * Effect:3D:Rotate
         */
        kLive3DRotateCommandStr : "Live 3DRotate",

        /**
         * Effect:Convert to Shape:Rectangle
         */
        kLiveRectangleCommandStr : "Live Rectangle",

        /**
         * Effect:Convert to Shape:Rounded Rectangle
         */
        kLiveRoundedRectangleCommandStr : "Live Rounded Rectangle",

        /**
         * Effect:Convert to Shape:Ellipse
         */
        kLiveEllipseCommandStr : "Live Ellipse",

        /**
         * Effect:Crop Marks
         */
        ksCommandStr : "Live Trim Marks",

        /**
         * Effect:Distort & Transform:Free Distort
         */
        kLiveFreeDistortCommandStr : "Live Free Distort",

        /**
         * Effect:Distort & Transform:Pucker & Bloat
         */
        kerBloatCommandStr : "Live Pucker & Bloat",

        /**
         * Effect:Distort & Transform:Roughen
         */
        kLiveRoughenCommandStr : "Live Roughen",

        /**
         * Effect:Distort & Transform:Transform
         */
        kLiveTransformCommandStr : "Live Transform",

        /**
         * Effect:Distort & Transform:Tweak
         */
        kCommandStr : "Live Scribble and Tweak",

        /**
         * Effect:Distort & Transform:Twist
         */
        kLiveTwistCommandStr : "Live Twist",

        /**
         * Effect:Distort & Transform:Zig Zag
         */
        kLiveZigZagCommandStr : "Live Zig Zag",

        /**
         * Effect:Path:Offset Path
         */
        kLiveOffsetPathCommandStr : "Live Offset Path",

        /**
         * Effect:Path:Outline Object
         */
        kLiveOutlineObjectCommandStr : "Live Outline Object",

        /**
         * Effect:Path:Outline Stroke
         */
        keCommandStr : "Live Outline Stroke",

        /**
         * Effect:Pathfinder:Add
         */
        kLivePathfinderAddCommandStr : "Live Pathfinder Add",

        /**
         * Effect:Pathfinder:Intersect
         */
        kLivePathfinderIntersectCommandStr : "Live Pathfinder Intersect",

        /**
         * Effect:Pathfinder:Exclude
         */
        kLivePathfinderExcludeCommandStr : "Live Pathfinder Exclude",

        /**
         * Effect:Pathfinder:Subtract
         */
        kLivePathfinderSubtractCommandStr : "Live Pathfinder Subtract",

        /**
         * Effect:Pathfinder:Minus Back
         */
        kCommandStr : "Live Pathfinder Minus Back",

        /**
         * Effect:Pathfinder:Divide
         */
        kLivePathfinderDivideCommandStr : "Live Pathfinder Divide",

        /**
         * Effect:Pathfinder:Trim
         */
        kLivePathfinderTrimCommandStr : "Live Pathfinder Trim",

        /**
         * Effect:Pathfinder:Merge
         */
        kLivePathfinderMergeCommandStr : "Live Pathfinder Merge",

        /**
         * Effect:Pathfinder:Crop
         */
        kLivePathfinderCropCommandStr : "Live Pathfinder Crop",

        /**
         * Effect:Pathfinder:Outline
         */
        kLivePathfinderOutlineCommandStr : "Live Pathfinder Outline",

        /**
         * Effect:Pathfinder:Hard Mix
         */
        kLivePathfinderHardMixCommandStr : "Live Pathfinder Hard Mix",

        /**
         * Effect:Pathfinder:Soft Mix
         */
        kLivePathfinderSoftMixCommandStr : "Live Pathfinder Soft Mix",

        /**
         * Effect:Pathfinder:Trap
         */
        kLivePathfinderTrapCommandStr : "Live Pathfinder Trap",

        /**
         * Effect:Rasterize
         */
        kLiveRasterizeCommandStr : "Live Rasterize",

        /**
         * Effect:Stylize:Drop Shadow
         */
        kLiveDropShadowCommandStr : "Live Adobe Drop Shadow",

        /**
         * Effect:Stylize:Feather
         */
        kLiveFeatherCommandStr : "Live Feather",

        /**
         * Effetc:Stylize:Inner Glow
         */
        kLiveInnerGlowCommandStr : "Live Inner Glow",

        /**
         * Effect:Stylize:outer Glow
         */
        kLiveOuterGlowCommandStr : "Live Outer Glow",

        /**
         * Effect:Stylize:Round Corners
         */
        kLiveAdobeRoundCornersCommandStr : "Live Adobe Round Corners",

        /**
         * Effect:Stylize:Scribble
         */
        kLiveScribbleFillCommandStr : "Live Scribble Fill",

        /**
         * Effect:SVG Filters:Apply SVG Filter
         */
        kLiveSVGFiltersCommandStr : "Live SVG Filters",

        /**
         * Effect:SVG Filters:Import SVG Filter
         */
        kSVGFilterImportCommandStr : "SVG Filter Import",

        /**
         * Effect:Warp:Arc
         */
        kLiveDeformArcCommandStr : "Live Deform Arc",

        /**
         * Effect:Warp:Arc Lower
         */
        kLiveDeformArcLowerCommandStr : "Live Deform Arc Lower",

        /**
         * Effect:Warp:Arc Upper
         */
        kLiveDeformArcUpperCommandStr : "Live Deform Arc Upper",

        /**
         * Effect:Warp:Arch
         */
        kLiveDeformArchCommandStr : "Live Deform Arch",

        /**
         * Effect:Warp:Bulge
         */
        kLiveDeformBulgeCommandStr : "Live Deform Bulge",

        /**
         * Effect:Warp:Shell Lower
         */
        kLiveDeformShellLowerCommandStr : "Live Deform Shell Lower",

        /**
         * Effect:Warp:Shell Upper
         */
        kLiveDeformShellUpperCommandStr : "Live Deform Shell Upper",

        /**
         * Effect:Warp:Flag
         */
        kLiveDeformFlagCommandStr : "Live Deform Flag",

        /**
         * Effect:Warp:Wave
         */
        kLiveDeformWaveCommandStr : "Live Deform Wave",

        /**
         * Effect:Warp:Fish
         */
        kLiveDeformFishCommandStr : "Live Deform Fish",

        /**
         * Effect:Warp:Rise
         */
        kLiveDeformRiseCommandStr : "Live Deform Rise",

        /**
         * Effect:Warp:Fisheye
         */
        kLiveDeformFisheyeCommandStr : "Live Deform Fisheye",

        /**
         * Effect:Warp:Inflate
         */
        kLiveDeformInflateCommandStr : "Live Deform Inflate",

        /**
         * Effect:Warp:Squeeze
         */
        kLiveDeformSqueezeCommandStr : "Live Deform Squeeze",

        /**
         * Effect:Warp:Twist
         */
        kLiveDeformTwistCommandStr : "Live Deform Twist",

        /**
         * Effect:Effect Gallery
         */
        kLivePSAdapterPluginGEfcCommandStr : "Live PSAdapter_plugin_GEfc",

        /**
         * Effect:Artistic:Colored Pencil
         */
        kLivePSAdapterPluginClrPCommandStr : "Live PSAdapter_plugin_ClrP",

        /**
         * Effect:Artistic:Cutout
         */
        kLivePSAdapterPluginCtCommandStr : "Live PSAdapter_plugin_Ct  ",

        /**
         * Effect:Artistic:Dry Brush
         */
        kLivePSAdapterPluginDryBCommandStr : "Live PSAdapter_plugin_DryB",

        /**
         * Effect:Artistic:Film Grain
         */
        kLivePSAdapterPluginFlmGCommandStr : "Live PSAdapter_plugin_FlmG",

        /**
         * Effect:Artistic:Fresco
         */
        kLivePSAdapterPluginFrscCommandStr : "Live PSAdapter_plugin_Frsc",

        /**
         * Effect:Artistic:Neon Glow
         */
        kLivePSAdapterPluginNGlwCommandStr : "Live PSAdapter_plugin_NGlw",

        /**
         * Effect:Artistic:Paint Daubs
         */
        kLivePSAdapterPluginPntDCommandStr : "Live PSAdapter_plugin_PntD",

        /**
         * Effect:Artistic:Palette Knife
         */
        kCommandStr : "Live PSAdapter_plugin_PltK",

        /**
         * Effect:Artistic:Plastic Wrap
         */
        kLivePSAdapterPluginPlsWCommandStr : "Live PSAdapter_plugin_PlsW",

        /**
         * Effect:Artistic:Poster Edges
         */
        kLivePSAdapterPluginPstECommandStr : "Live PSAdapter_plugin_PstE",

        /**
         * Effect:Artistic:Rough Pastels
         */
        kLivePSAdapterPluginRghPCommandStr : "Live PSAdapter_plugin_RghP",

        /**
         * Effect:Artistic:Smudge Stick
         */
        kLivePSAdapterPluginSmdSCommandStr : "Live PSAdapter_plugin_SmdS",

        /**
         * Effect:Artistic:Sponge
         */
        kLivePSAdapterPluginSpngCommandStr : "Live PSAdapter_plugin_Spng",

        /**
         * Effect:Artistic:Underpainting
         */
        kLivePSAdapterPluginUndrCommandStr : "Live PSAdapter_plugin_Undr",

        /**
         * Effect:Artistic:Watercolor
         */
        kLivePSAdapterPluginWtrcCommandStr : "Live PSAdapter_plugin_Wtrc",

        /**
         * Effect:Blur:Gaussian Blur
         */
        kLivePSAdapterPluginGblRCommandStr : "Live PSAdapter_plugin_GblR",

        /**
         * Effect:Blur:Radial Blur
         */
        kLivePSAdapterPluginRdlBCommandStr : "Live PSAdapter_plugin_RdlB",

        /**
         * Effect:Blur:Smart Blur
         */
        kLivePSAdapterPluginSmrBCommandStr : "Live PSAdapter_plugin_SmrB",

        /**
         * Effect:Brush Strokes:Accented Edges
         */
        kLivePSAdapterPluginAccECommandStr : "Live PSAdapter_plugin_AccE",

        /**
         * Effect:Brush Strokes:Angled Strokes
         */
        kLivePSAdapterPluginAngSCommandStr : "Live PSAdapter_plugin_AngS",

        /**
         * Effect:Brush Strokes:Crosshatch
         */
        kLivePSAdapterPluginCrshCommandStr : "Live PSAdapter_plugin_Crsh",

        /**
         * Effect:Brush Strokes:Dark Strokes
         */
        kSCommandStr : "Live PSAdapter_plugin_DrkS",

        /**
         * Effect:Brush Strokes:Ink Outlines
         */
        kOCommandStr : "Live PSAdapter_plugin_InkO",

        /**
         * Effect:Brush Strokes:Spatter
         */
        kLivePSAdapterPluginSptCommandStr : "Live PSAdapter_plugin_Spt ",

        /**
         * Effect:Brush Strokes:Sprayed Strokes
         */
        kLivePSAdapterPluginSprSCommandStr : "Live PSAdapter_plugin_SprS",

        /**
         * Effect:Brush Strokes:Sumi-e
         */
        kLivePSAdapterPluginSmieCommandStr : "Live PSAdapter_plugin_Smie",

        /**
         * Effect:Distort:Diffuse Glow
         */
        kLivePSAdapterPluginDfsGCommandStr : "Live PSAdapter_plugin_DfsG",

        /**
         * Effect:Distort:Glass
         */
        kLivePSAdapterPluginGlsCommandStr : "Live PSAdapter_plugin_Gls ",

        /**
         * Effect:Distort:Ocean Ripple
         */
        kLivePSAdapterPluginOcnRCommandStr : "Live PSAdapter_plugin_OcnR",

        /**
         * Effect:Pixelate:Color Halftone
         */
        kLivePSAdapterPluginClrHCommandStr : "Live PSAdapter_plugin_ClrH",

        /**
         * Effect:Pixelate:Crystallize
         */
        kLivePSAdapterPluginCrstCommandStr : "Live PSAdapter_plugin_Crst",

        /**
         * Effect:Pixelate:Mezzotint
         */
        kLivePSAdapterPluginMztnCommandStr : "Live PSAdapter_plugin_Mztn",

        /**
         * Effect:Pixelate:Pointillize
         */
        kLivePSAdapterPluginPntlCommandStr : "Live PSAdapter_plugin_Pntl",

        /**
         * Effect:Sharpen:Unsharp Mask
         */
        kCommandStr : "Live PSAdapter_plugin_USMk",

        /**
         * Effect:Sketch:Bas Relief
         */
        kLivePSAdapterPluginBsRlCommandStr : "Live PSAdapter_plugin_BsRl",

        /**
         * Effect:Sketch:Chalk & Charcoal
         */
        kLivePSAdapterPluginChlCCommandStr : "Live PSAdapter_plugin_ChlC",

        /**
         * Effect:Sketch:Charcoal
         */
        kLivePSAdapterPluginChrcCommandStr : "Live PSAdapter_plugin_Chrc",

        /**
         * Effect:Sketch:Chrome
         */
        kLivePSAdapterPluginChrmCommandStr : "Live PSAdapter_plugin_Chrm",

        /**
         * Effect:Sketch:Cont￩ Crayon
         */
        kLivePSAdapterPluginCntCCommandStr : "Live PSAdapter_plugin_CntC",

        /**
         * Effect:Sketch:Graphic Pen
         */
        kLivePSAdapterPluginGraPCommandStr : "Live PSAdapter_plugin_GraP",

        /**
         * Effect:Sketch:Halftone Pattern
         */
        kLivePSAdapterPluginHlfSCommandStr : "Live PSAdapter_plugin_HlfS",

        /**
         * Effect:Sketch:Note Paper
         */
        kLivePSAdapterPluginNtPrCommandStr : "Live PSAdapter_plugin_NtPr",

        /**
         * Effect:Sketch:Photocopy
         */
        kLivePSAdapterPluginPhtcCommandStr : "Live PSAdapter_plugin_Phtc",

        /**
         * Effect:Sketch:Plaster
         */
        kLivePSAdapterPluginPlstCommandStr : "Live PSAdapter_plugin_Plst",

        /**
         * Effect:Sketch:Reticulation
         */
        kLivePSAdapterPluginRtclCommandStr : "Live PSAdapter_plugin_Rtcl",

        /**
         * Effect:Sketch:Stamp
         */
        kLivePSAdapterPluginStmpCommandStr : "Live PSAdapter_plugin_Stmp",

        /**
         * Effect:Sketch:Torn Edges
         */
        kLivePSAdapterPluginTrnECommandStr : "Live PSAdapter_plugin_TrnE",

        /**
         * Effect:Sketch:Water Paper
         */
        kLivePSAdapterPluginWtrPCommandStr : "Live PSAdapter_plugin_WtrP",

        /**
         * Effect:Stylize:Glowing Edges
         */
        kLivePSAdapterPluginGlwECommandStr : "Live PSAdapter_plugin_GlwE",

        /**
         * Effect:Texture:Craquelure
         */
        kLivePSAdapterPluginCrqlCommandStr : "Live PSAdapter_plugin_Crql",

        /**
         * Effect:Texture:Grain
         */
        kLivePSAdapterPluginGrnCommandStr : "Live PSAdapter_plugin_Grn ",

        /**
         * Effect:Texture:Mosaic Tiles
         */
        kLivePSAdapterPluginMscTCommandStr : "Live PSAdapter_plugin_MscT",

        /**
         * Effect:Texture:Patchwork
         */
        kLivePSAdapterPluginPtchCommandStr : "Live PSAdapter_plugin_Ptch",

        /**
         * Effect:Texture:Stained Glass
         */
        kLivePSAdapterPluginStnGCommandStr : "Live PSAdapter_plugin_StnG",

        /**
         * Effect:Texture:Texturizer
         */
        kLivePSAdapterPluginTxtzCommandStr : "Live PSAdapter_plugin_Txtz",

        /**
         * Effect:Video:De-Interlace
         */
        kLivePSAdapterPluginDntrCommandStr : "Live PSAdapter_plugin_Dntr",

        /**
         * Effect:Video:NTSC Colors
         */
        kLivePSAdapterPluginNTSCCommandStr : "Live PSAdapter_plugin_NTSC",

        /**
         * View:Preview
         */
        kPreviewCommandStr : "preview",

        /**
         * View:Overprint Preview
         */
        kCommandStr : "ink",

        /**
         * View:Pixel Preview
         */
        kRasterCommandStr : "raster",

        /**
         * View:Proof Setup:Document CMYK:
         */
        kProofDocumentCommandStr : "proof-document",

        /**
         * View:Proof Setup:Legacy Macintosh RGB (Gamma 1.8)
         */
        kProofMacRgbCommandStr : "proof-mac-rgb",

        /**
         * View:Proof Setup:Internet Standard RGB (sRGB)
         */
        kProofWinRgbCommandStr : "proof-win-rgb",

        /**
         * View:Proof Setup:Monitor RGB
         */
        kProofMonitorRgbCommandStr : "proof-monitor-rgb",

        /**
         * View:Proof Setup:Color blindness - Protanopia-type
         */
        kProofColorblindpCommandStr : "proof-colorblindp",

        /**
         * View:Proof Setup:Color blindness - Deuteranopia-type
         */
        kProofColorblinddCommandStr : "proof-colorblindd",

        /**
         * View:Proof Setup:Customize
         */
        kProofCustomCommandStr : "proof-custom",

        /**
         * View:Proof Colors
         */
        kProofColorsCommandStr : "proofColors",

        /**
         * View:Zoom In
         */
        kZoominCommandStr : "zoomin",

        /**
         * View:Zoom Out
         */
        kZoomoutCommandStr : "zoomout",

        /**
         * View:Fit Artboard in Window
         */
        kFitArtboardCommandStr : "fitin",

        /**
         * View:Fit All in Window
         */
        kFitallCommandStr : "fitall",

        /**
         * View:Actual Size
         */
        kActualsizeCommandStr : "actualsize",

        /**
         * View:Hide Edges
         */
        kEdgeCommandStr : "edge",

        /**
         * View:Hide Artboards
         */
        kArtboardCommandStr : "artboard",

        /**
         * View:Hide Print Tiling
         */
        kPagetilingCommandStr : "pagetiling",

        /**
         * View:Show Slices
         */
        kMenuCommandStr : "AISlice Feedback Menu",

        /**
         * View:Lock Slices
         */
        kMenuCommandStr : "AISlice Lock Menu",

        /**
         * View:Show Template
         */
        kShowtemplateCommandStr : "showtemplate",

        /**
         * View:Rulers:Show Rulers
         */
        kRulerCommandStr : "ruler",

        /**
         * View:Rulers:Show Video Rulers
         */
        kVideorulerCommandStr : "videoruler",

        /**
         * View:Rulers:Change to Global Rulers
         */
        kSwitchRulerCommandStr : "rulerCoordinateSystem",

        /**
         * View:Hide Bounding Box
         */
        kAIBoundingBoxToggleCommandStr : "AI Bounding Box Toggle",

        /**
         * View:Show Transparency Grid
         */
        kTransparencyGridMenuItemCommandStr : "TransparencyGrid Menu Item",

        /**
         * View:Show Text Threads
         */
        kTextthreadsCommandStr : "textthreads",

        /**
         * View:Hide Gradient Annotator
         */
        kCommandStr : "Gradient Feedback",

        /**
         * View:Show Live Paint Gaps
         */
        kShowGapsPlanetXCommandStr : "Show Gaps Planet X",

        /**
         * View:Guides:Hide Guides
         */
        kShowguideCommandStr : "showguide",

        /**
         * View:Guides:Lock Guides
         */
        kguideCommandStr : "lockguide",

        /**
         * View:Guides:Make Guides
         */
        keguideCommandStr : "makeguide",

        /**
         * View:Guides:Release Guides
         */
        kReleaseguideCommandStr : "releaseguide",

        /**
         * View:Guides:Clear Guides
         */
        kClearguideCommandStr : "clearguide",

        /**
         * View:Smart Guides
         */
        kSnapomaticOnOffMenuItemCommandStr : "Snapomatic on-off menu item",

        /**
         * View:Perspective Grid:Show Grid
         */
        kShowPerspectiveGridCommandStr : "Show Perspective Grid",

        /**
         * View:Perspective Grid:Show Rulers
         */
        kShowRulerCommandStr : "Show Ruler",

        /**
         * View:Perspective Grid:Snap to Grid
         */
        kSnapToGridCommandStr : "Snap to Grid",

        /**
         * View:Perspective Grid:Lock Grid
         */
        kPerspectiveGridCommandStr : "Lock Perspective Grid",

        /**
         * View:Perspective Grid:Lock Station Point
         */
        kStationPointCommandStr : "Lock Station Point",

        /**
         * View:Perspective Grid:Define Grid
         */
        kDefinePerspectiveGridCommandStr : "Define Perspective Grid",

        /**
         * View:Perspective Grid:Save Grid as Preset
         */
        kSavePerspectiveGridAsPresetCommandStr : "Save Perspective Grid as Preset",

        /**
         * View:Show Grid
         */
        kShowgridCommandStr : "showgrid",

        /**
         * View:Snap to Grid
         */
        kSnapgridCommandStr : "snapgrid",

        /**
         * View:Snap to Point
         */
        kSnappointCommandStr : "snappoint",

        /**
         * View:New View
         */
        kNewviewCommandStr : "newview",

        /**
         * View:Edit Views
         */
        kEditviewCommandStr : "editview",

        /**
         * Window:New Window
         */
        kNewwindowCommandStr : "newwindow",

        /**
         * Window:Arrange:Cascade
         */
        kCascadeCommandStr : "cascade",

        /**
         * Window:Arrange:Tile
         */
        kTileCommandStr : "tile",

        /**
         * Window:Arrange:Float in Window
         */
        kFloatInWindowCommandStr : "floatInWindow",

        /**
         * Window:Arrange:Float All in Windows
         */
        kFloatAllInWindowsCommandStr : "floatAllInWindows",

        /**
         * Window:Arrange:Consolidate All Windows
         */
        kConsolidateAllWindowsCommandStr : "consolidateAllWindows",

        /**
         * Window:Workspace:Save Workspace
         */
        kspaceCommandStr : "Adobe Save Workspace",

        /**
         * Window:Workspace:New Workspace
         */
        kspaceCommandStr : "Adobe New Workspace",

        /**
         * Window:Workspace:Manage Workspaces
         */
        kspaceCommandStr : "Adobe Manage Workspace",

        /**
         * Window:Control
         */
        kControlPalettePluginCommandStr : "control palette plugin",

        /**
         * Window:Tools
         */
        kAdobeBuiltInToolbox1CommandStr : "AdobeBuiltInToolbox1",

        /**
         * Window:Actions
         */
        kAdobeActionPaletteCommandStr : "Adobe Action Palette",

        /**
         * Window:Align
         */
        kAdobeAlignPaletteCommandStr : "AdobeAlignObjects2",

        /**
         * Window:Appearance
         */
        kStylePaletteCommandStr : "Style Palette",

        /**
         * Window:Artboards
         */
        kAdobeArtboardPaletteCommandStr : "Adobe Artboard Palette",

        /**
         * Window:Attributes
         */
        kInternalPalettesPosingAsPlugInMenusAttributesCommandStr : "internal palettes posing as plug-in menus-attributes",

        /**
         * Window:Brushes
         */
        kAdobeBrushManagerMenuItemCommandStr : "Adobe BrushManager Menu Item",

        /**
         * Window:Color
         */
        kAdobeColorPaletteCommandStr : "Adobe Color Palette",

        /**
         * Window:Color Guide
         */
        kAdobeHarmonyPaletteCommandStr : "Adobe Harmony Palette",

        /**
         * Window:Document Info
         */
        kDocInfo1CommandStr : "DocInfo1",

        /**
         * Window:Flattener Preview
         */
        kAdobeFlatteningPreviewCommandStr : "Adobe Flattening Preview",

        /**
         * Window:Gradient
         */
        kAdobeGradientPaletteCommandStr : "Adobe Gradient Palette",

        /**
         * Window:Graphic Styles
         */
        kAdobeStylePaletteCommandStr : "Adobe Style Palette",

        /**
         * Window:Info
         */
        kInternalPalettesPosingAsPlugInMenusInfoCommandStr : "internal palettes posing as plug-in menus-info",

        /**
         * Window:Layers
         */
        kAdobeLayerPalette1CommandStr : "AdobeLayerPalette1",

        /**
         * Window:Links
         */
        kPaletteMenuItemCommandStr : "Adobe LinkPalette Menu Item",

        /**
         * Window:Magic Wand
         */
        kAIMagicWandCommandStr : "AI Magic Wand",

        /**
         * Window:Navigator
         */
        kAdobeNavigator1CommandStr : "AdobeNavigator",

        /**
         * Window:Pathfinder
         */
        kAdobePathfinderPalette1CommandStr : "Adobe PathfinderUI",

        /**
         * Window:Separations Preview
         */
        kAdobeSeparationPreviewPaletteCommandStr : "Adobe Separation Preview Panel",

        /**
         * Window:Stroke
         */
        kePaletteCommandStr : "Adobe Stroke Palette",

        /**
         * Window:SVG Interactivity
         */
        kAdobeSVGInteractivityPaletteCommandStr : "Adobe SVG Interactivity Palette",

        /**
         * Window:Swatches
         */
        kAdobeSwatchesMenuItemCommandStr : "Adobe Swatches Menu Item",

        /**
         * Window:Symbols
         */
        kAdobeSymbolPaletteCommandStr : "Adobe Symbol Palette",

        /**
         * Window:Transform
         */
        kAdobeTransformObjects1CommandStr : "AdobeTransformObjects1",

        /**
         * Window:Transparency
         */
        kAdobeTransparencyPaletteMenuItemCommandStr : "Adobe Transparency Palette Menu Item",

        /**
         * Window:Type:Character
         */
        kInternalPalettesPosingAsPlugInMenusCharacterCommandStr : "internal palettes posing as plug-in menus-character",

        /**
         * Window:Type:Character Styles
         */
        kCharacterStylesCommandStr : "Character Styles",

        /**
         * Window:Type:Flash Text
         */
        kFlashTextCommandStr : "Flash Text",

        /**
         * Window:Type:Glyphs
         */
        kAlternateGlyphPalettePlugin2CommandStr : "alternate glyph palette plugin 2",

        /**
         * Window:Type:OpenType
         */
        kInternalPalettesPosingAsPlugInMenusOpentypeCommandStr : "internal palettes posing as plug-in menus-opentype",

        /**
         * Window:Type:Paragraph
         */
        kInternalPalettesPosingAsPlugInMenusParagraphCommandStr : "internal palettes posing as plug-in menus-paragraph",

        /**
         * Window:Type:Paragraph Styles
         */
        kAdobeParagraphStylesPaletteCommandStr : "Adobe Paragraph Styles Palette",

        /**
         * Window:Type:Tabs
         */
        kInternalPalettesPosingAsPlugInMenusTabCommandStr : "internal palettes posing as plug-in menus-tab",

        /**
         * Window:Variables
         */
        kAdobeVariablesPaletteMenuItemCommandStr : "Adobe Variables Palette Menu Item",

        /**
         * Window:Brush Libraries:No Libraries found
         */
        kAdobeBrushMgrNoLibrariesMenuItemCommandStr : "AdobeBrushMgr No libraries menu item",

        /**
         * Window:Brush Libraries:Other Library
         */
        kAdobeBrushMgrOtherLibrariesMenuItemCommandStr : "AdobeBrushMgr Other libraries menu item",

        /**
         * Window:Graphic Style Libraries:No Libraries found
         */
        kAdobeArtStylePluginNoLibrariesMenuItemCommandStr : "Adobe Art Style Plugin No libraries menu item",

        /**
         * Window:Graphic Style Libraries:Other Library
         */
        kAdobeArtStylePluginOtherLibrariesMenuItemCommandStr : "Adobe Art Style Plugin Other libraries menu item",

        /**
         * Window:Symbol Libraries:No Libraries found
         */
        kAdobeSymbolPalettePluginNoLibrariesMenuItemCommandStr : "Adobe Symbol Palette Plugin No libraries menu item",

        /**
         * Window:Symbol Libraries:Other Library
         */
        kAdobeSymbolPalettePluginOtherLibrariesMenuItemCommandStr : "Adobe Symbol Palette Plugin Other libraries menu item",

        /**
         * Help:Illustrator Help
         */
        kHelpcontentCommandStr : "helpcontent",

        /**
         * Help:Welcome Screen
         */
        kWelcomeScreenMenuItemCommandStr : "Welcome screen menu item",

        /**
         * Help:Debug:Memory Use Checkpoint
         */
        kpointCommandStr : "Memory Use Checkpoint",

        /**
         * Help:Debug:Save Memory Use
         */
        kSaveMemoryUseCommandStr : "Save Memory Use",

        /**
         * Help:Debug:Count Objects
         */
        kCountObjectsCommandStr : "Count Objects",

        /**
         * Help:Debug:Object Counts
         */
        kObjectCountsCommandStr : "Object Counts",

        /**
         * Help:Debug:Track API Refs
         */
        kAPIRefsCommandStr : "Track API Refs",

        /**
         * Help:Debug:Enable New Rendering
         */
        kEnableNewRenderingCommandStr : "Enable New Rendering",

        /**
         * Help:Debug:Enable Rendering Timer
         */
        kEnableRenderingTimerCommandStr : "Enable Rendering Timer",

        /**
         * Help:Debug:Purge Rendering Cache
         */
        kPurgeRenderingCacheCommandStr : "Purge Rendering Cache",

        /**
         * Help:Debug:Redraw
         */
        kRedrawCommandStr : "Redraw",

        /**
         * Help:Debug:Dump Application Heap Used
         */
        kDumpApplicationHeapUsedCommandStr : "Dump Application Heap Used",

        /**
         * Help:Debug:Disable Greeking for New Rendering
         */
        kingForNewRenderingCommandStr : "Disable Greeking for New Rendering",

        /**
         * Help:Debug:Enable Threaded Rendering
         */
        kEnableThreadedRenderingCommandStr : "Enable Threaded Rendering",

        /**
         * Help:Debug:Enable AGM Threading
         */
        kEnableAGMThreadingCommandStr : "Enable AGM Threading",

        /**
         * Help:Debug:Enable Hyper Threading
         */
        kEnableHyperThreadingCommandStr : "Enable Hyper Threading",

        /**
         * Help:Debug:Enable AGM Internal Memory Pool
         */
        kEnableAGMInternalMemoryPoolCommandStr : "Enable AGM Internal Memory Pool",

        /**
         * Help:Debug:Enable QuickPort Quartz
         */
        kPortQuartzCommandStr : "Enable QuickPort Quartz",

        /**
         * Help:Debug:Heap Check Running
         */
        kRunningCommandStr : "Heap Check Running",

        /**
         * Help:Debug:Crash
         */
        kCrashCommandStr : "Crash",

        /**
         * Help:Debug:Enable PGF Recovery
         */
        kEnablePGFRecoveryCommandStr : "Enable PGF Recovery",

        /**
         * Help:Debug:Enable ATE Read Recovery
         */
        kEnableATEReadRecoveryCommandStr : "Enable ATE Read Recovery",

        /**
         * Help:Debug:Enable ATE Write Recovery
         */
        kEnableATEWriteRecoveryCommandStr : "Enable ATE Write Recovery",

        /**
         * Help:Debug:Trace Counted Object Refs
         */
        kTraceCountedObjectRefsCommandStr : "Trace Counted Object Refs",

        /**
         * Help:Debug:Check Heap
         */
        kHeapCommandStr : "Check Heap",

        /**
         * Help:Debug:Track Blocks
         */
        ksCommandStr : "Track Blocks",

        /**
         * Help:Debug:Defer Freeing
         */
        kDeferFreeingCommandStr : "Defer Freeing",

        /**
         * Help:Debug:Debug Window
         */
        kDebugWindowCommandStr : "Debug Window",

        /**
         * Help:Debug:Flush Preference to File
         */
        kFlushPreferenceToFileCommandStr : "Flush Preference to File",

        /**
         * Help:Debug:Reinterpret Grayscale Image Color Space
         */
        kReinterpretGrayscaleImageColorSpaceCommandStr : "Reinterpret Grayscale Image Color Space",

        /**
         * Help:Debug:Split and Interleave Raster Channels
         */
        kSplitAndInterleaveRasterChannelsCommandStr : "Split and Interleave Raster Channels",

        /**
         * Help:Debug:Populate Live Effect Graphic Styles
         */
        kPopulateLiveEffectGraphicStylesCommandStr : "Populate Live Effect Graphic Styles",

        /**
         * Help:Debug:Use ContainsTransparency Flag
         */
        kUseContainsTransparencyFlagCommandStr : "Use ContainsTransparency Flag",

        /**
         * Help:Debug:Add Known Style
         */
        knownStyleCommandStr : "Add Known Style",

        /**
         * Help:Debug:Mark Logs
         */
        kLogsCommandStr : "Mark Logs",

        /**
         * Help:Debug:Clear Logs
         */
        kClearLogsCommandStr : "Clear Logs",

        /**
         * Help:Debug:Run UnicodeString testbed
         */
        kRunUnicodeStringTestbedCommandStr : "Run UnicodeString testbed",

        /**
         * Help:Debug:Enable Gradient Feedback
         */
        kDebugCommandStr : "Gradient Feedback Debug",

        /**
         * Help:Debug:Unit Testing
         */
        kAdobeUnitTestingCommandStr : "Adobe Unit testing",

        /**
         * Help:Create Eve Dialog
         */
        kAdamEveDialogMenuCommandStr : "Adam Eve dialog menu",

        /**
         * Help:About Illustrator
         */
        kAboutCommandStr : "about",

        /**
         * Help:System Info
         */
        kSystemInfoStr : "System Info",

        /**
         * Other Panel:New Symbol
         */
        kAdobeNewSymbolShortcutCommandStr : "Adobe New Symbol Shortcut",

        /**
         * Other Panel:Show Color Panel (Secondary)
         */
        kAdobeColorPaletteSecondaryCommandStr : "Adobe Color Palette Secondary",

        /**
         * Other Panel:Actions Batch
         */
        kAdobeActionsBatchCommandStr : "Adobe Actions Batch",

        /**
         * Other Panel:Add New Fill
         */
        kAdobeNewFillShortcutCommandStr : "Adobe New Fill Shortcut",

        /**
         * Other Panel:Add New Stroke
         */
        keShortcutCommandStr : "Adobe New Stroke Shortcut",

        /**
         * Other Panel:New Graphic Style
         */
        kAdobeNewStyleShortcutCommandStr : "Adobe New Style Shortcut",

        /**
         * Other Panel:New Layer
         */
        kAdobeLayerPalette2CommandStr : "AdobeLayerPalette2",

        /**
         * Other Panel:New Layer with Dialog
         */
        kAdobeLayerPalette3CommandStr : "AdobeLayerPalette3",

        /**
         * Other Panel:Update Link
         */
        kShortcutCommandStr : "Adobe Update Link Shortcut",

        /**
         * Other Panel:Navigator Options
         */
        kAdobeNavigator2CommandStr : "AdobeNavigator2",

        /**
         * Other Panel:New Swatch
         */
        kAdobeNewSwatchShortcutMenuCommandStr : "Adobe New Swatch Shortcut Menu"
    };

    /**
     * Get the Menu Command name. This method allows the caller to
     * pass the kCommandStr identifier or the actual string value
     *
     * @param kCommandStr
     * @returns {*}
     */
    this.getCommand = function(kCommandStr) {
        if (typeof(this.commands[kCommandStr]) != "undefined") {
            return this.commands[kCommandStr];
        }
        for (key in this.commands) {
            if (kCommandStr == this.commands[key]) {
                return kCommandStr;
            }
        }
        return null;
    };

    /**
     * Set the command name after the object is created.
     * @param kCommandStr
     */
    this.setCommand = function(kCommandStr) {
        this.kCommandStr = kCommandStr;
    };

    /**
     * Execute the menu command.
     */
    this.run = function() {
        try {
            APP.doCommand(this.getCommand(kCommandStr));
        }
        catch(e) {
            Logger.write(e);
        }
    }
    
    if (runImmediately) {
        this.run();
    }
};