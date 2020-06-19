import * as React from 'react';
import { ContentBlock, ContentState, EditorState } from 'draft-js';
interface OwnProps {
    block: ContentBlock;
    contentState: ContentState;
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
}
declare const Image: React.FC<OwnProps>;
export default Image;
