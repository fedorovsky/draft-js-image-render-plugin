"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRenderPlugin = void 0;
var React = __importStar(require("react"));
var draft_js_plugins_editor_1 = __importDefault(require("draft-js-plugins-editor"));
var draft_js_focus_plugin_1 = __importDefault(require("draft-js-focus-plugin"));
var draft_js_plugins_editor_2 = require("draft-js-plugins-editor");
var react_json_view_1 = __importDefault(require("react-json-view"));
var draft_js_1 = require("draft-js");
var draft_js_export_html_1 = require("draft-js-export-html");
var draft_js_image_render_plugin_1 = __importStar(require("../../plugin/draft-js-image-render-plugin"));
var Image_1 = __importDefault(require("../Image"));
var Editor_styled_1 = require("./Editor.styled");
var focusPlugin = draft_js_focus_plugin_1.default();
console.log(draft_js_plugins_editor_2.composeDecorators(focusPlugin.decorator));
exports.imageRenderPlugin = draft_js_image_render_plugin_1.default({
    imageComponent: Image_1.default,
    decorator: draft_js_plugins_editor_2.composeDecorators(focusPlugin.decorator),
});
var plugins = [focusPlugin, exports.imageRenderPlugin];
var Editor = function () {
    var editorRef = React.useRef(null);
    var _a = React.useState(draft_js_1.EditorState.createEmpty()), editorState = _a[0], setEditorState = _a[1];
    var handleChangeEditor = function (state) {
        setEditorState(state);
    };
    var html = React.useMemo(function () {
        var currentContent = editorState.getCurrentContent();
        return draft_js_export_html_1.stateToHTML(currentContent);
    }, [editorState]);
    var handleAddImage = function () {
        var newState = draft_js_image_render_plugin_1.addImage(editorState, 'https://via.placeholder.com/350x150', {});
        setEditorState(newState);
    };
    return (React.createElement("div", null,
        React.createElement(Editor_styled_1.Wrapper, null,
            React.createElement(draft_js_plugins_editor_1.default, { ref: editorRef, plugins: plugins, editorState: editorState, onChange: handleChangeEditor })),
        React.createElement("button", { onClick: handleAddImage }, "ADD IMAGE"),
        React.createElement("div", null,
            React.createElement("h3", null, "Result (HTML):"),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: html } })),
        React.createElement(react_json_view_1.default, { src: draft_js_1.convertToRaw(editorState.getCurrentContent()), collapsed: 3 })));
};
exports.default = Editor;
