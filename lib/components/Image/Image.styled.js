"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.ImageWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.ImageWrapper = styled_components_1.default.figure(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
exports.Image = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 100%;\n  transition: box-shadow 0.2s;\n  object-fit: cover;\n\n  &.draftJsFocusPlugin__unfocused__1Wvrs:hover {\n    border-radius: 4px;\n    box-shadow: 0 0 0 2px #aeb2c9;\n  }\n\n  &.draftJsFocusPlugin__focused__3Mksn {\n    border-radius: 4px;\n    box-shadow: 0 0 0 2px #00badd;\n  }\n"], ["\n  max-width: 100%;\n  transition: box-shadow 0.2s;\n  object-fit: cover;\n\n  &.draftJsFocusPlugin__unfocused__1Wvrs:hover {\n    border-radius: 4px;\n    box-shadow: 0 0 0 2px #aeb2c9;\n  }\n\n  &.draftJsFocusPlugin__focused__3Mksn {\n    border-radius: 4px;\n    box-shadow: 0 0 0 2px #00badd;\n  }\n"])));
var templateObject_1, templateObject_2;
