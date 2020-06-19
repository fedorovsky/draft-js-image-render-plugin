"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var draft_js_1 = require("draft-js");
var draft_js_image_render_plugin_1 = require("../../plugin/draft-js-image-render-plugin");
var Styled = __importStar(require("./Image.styled"));
var Image = function (_a) {
    var block = _a.block, contentState = _a.contentState, props = __rest(_a, ["block", "contentState"]);
    var _b = contentState
        .getEntity(block.getEntityAt(0))
        .getData(), src = _b.src, height = _b.height, width = _b.width, alt = _b.alt;
    React.useEffect(function () {
        console.log('image', props);
    }, []);
    var handleDelete = function () {
        var editorState = props.getEditorState();
        var setEditorState = props.setEditorState;
        var selectionState = editorState.getSelection();
        var newContentState = draft_js_image_render_plugin_1.removeBlock(contentState, selectionState.getFocusKey());
        setEditorState(draft_js_1.EditorState.push(editorState, newContentState, 'delete-character'));
    };
    return (React.createElement(Styled.ImageWrapper, null,
        React.createElement("button", { onClick: handleDelete }, "DELETE IMAGE"),
        React.createElement(Styled.Image, __assign({ src: src, alt: alt, height: height, width: width }, props, { role: "presentation" }))));
};
exports.default = Image;
