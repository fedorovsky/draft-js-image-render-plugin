import * as React from 'react';
import addImage from './modifiers/addImage';
import removeBlock from './modifiers/removeBlock';
import { ContentBlock, ContentState, EditorState } from 'draft-js';
declare type Initialize = (pluginFunctions: {
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
}) => void;
declare type BlockRendererFn = (block: ContentBlock, pluginFunctions: {
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
}) => void;
interface ImageComponentProps {
    block: ContentBlock;
    contentState: ContentState;
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
}
declare const createImageRenderPlugin: (config?: {
    imageComponent?: React.FC<ImageComponentProps> | undefined;
    decorator?: any;
} | undefined) => {
    blockRendererFn: BlockRendererFn;
    initialize: Initialize;
};
export { addImage, removeBlock };
export default createImageRenderPlugin;
