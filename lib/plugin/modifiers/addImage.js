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
Object.defineProperty(exports, "__esModule", { value: true });
var draft_js_1 = require("draft-js");
var addImage = function (editorState, url, extraData) {
    var urlType = 'IMAGE';
    var contentState = editorState.getCurrentContent();
    var contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', __assign(__assign({}, extraData), { src: url }));
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    var newEditorState = draft_js_1.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, 'i');
    return draft_js_1.EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter());
};
exports.default = addImage;
