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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBlock = exports.addImage = void 0;
var React = __importStar(require("react"));
var addImage_1 = __importDefault(require("./modifiers/addImage"));
exports.addImage = addImage_1.default;
var removeBlock_1 = __importDefault(require("./modifiers/removeBlock"));
exports.removeBlock = removeBlock_1.default;
var draft_js_1 = require("draft-js");
var ImageComponent = function (_a) {
    var block = _a.block, contentState = _a.contentState;
    var src = contentState.getEntity(block.getEntityAt(0)).getData().src;
    return React.createElement("img", { src: src, alt: "preview" });
};
var createImageRenderPlugin = function (config) {
    var _state = {
        getEditorState: function () { return draft_js_1.EditorState.createEmpty(); },
        setEditorState: function () { return null; },
    };
    var Image = (config === null || config === void 0 ? void 0 : config.imageComponent) || ImageComponent;
    if (config === null || config === void 0 ? void 0 : config.decorator) {
        Image = config === null || config === void 0 ? void 0 : config.decorator(Image);
    }
    var DecoratedImage = function (props) {
        return (React.createElement(Image, __assign({}, props, { getEditorState: _state.getEditorState, setEditorState: _state.setEditorState })));
    };
    return {
        initialize: function (_a) {
            var getEditorState = _a.getEditorState, setEditorState = _a.setEditorState;
            _state = { getEditorState: getEditorState, setEditorState: setEditorState };
        },
        blockRendererFn: function (block, _a) {
            var getEditorState = _a.getEditorState;
            if (block.getType() === 'atomic') {
                var contentState = getEditorState().getCurrentContent();
                var entity = block.getEntityAt(0);
                if (!entity)
                    return null;
                var type = contentState.getEntity(entity).getType();
                if (type === 'IMAGE' || type === 'image') {
                    return {
                        component: DecoratedImage,
                        editable: false,
                    };
                }
                return null;
            }
            return null;
        },
    };
};
exports.default = createImageRenderPlugin;
