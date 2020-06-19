import { EditorState } from 'draft-js';
export declare const imageRenderPlugin: {
    blockRendererFn: (block: Draft.Model.ImmutableData.ContentBlock, pluginFunctions: {
        getEditorState: () => EditorState;
        setEditorState: (editorState: EditorState) => void;
    }) => void;
    initialize: (pluginFunctions: {
        getEditorState: () => EditorState;
        setEditorState: (editorState: EditorState) => void;
    }) => void;
};
declare const Editor: () => JSX.Element;
export default Editor;
