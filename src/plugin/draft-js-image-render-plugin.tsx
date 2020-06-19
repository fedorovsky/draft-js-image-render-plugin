import * as React from 'react';
import addImage from './modifiers/addImage';
import removeBlock from './modifiers/removeBlock';
import { ContentBlock, ContentState, EditorState } from 'draft-js';

type Initialize = (pluginFunctions: {
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
}) => void;

type BlockRendererFn = (
  block: ContentBlock,
  pluginFunctions: {
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
  },
) => void;

interface ImageComponentProps {
  block: ContentBlock;
  contentState: ContentState;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  block,
  contentState,
}) => {
  const { src } = contentState.getEntity(block.getEntityAt(0)).getData();
  return <img src={src} alt="preview" />;
};

const createImageRenderPlugin = (
  config?: {
    imageComponent?: React.FC<ImageComponentProps>;
    decorator?: any;
  } ,
): {
  blockRendererFn: BlockRendererFn;
  initialize: Initialize;
} => {
  let _state: {
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
  } = {
    getEditorState: () => EditorState.createEmpty(),
    setEditorState: () => null,
  };
  let Image = config?.imageComponent || ImageComponent;
  if (config?.decorator) {
    Image = config?.decorator(Image);
  }
  const DecoratedImage: React.FC<ImageComponentProps> = props => {
    return (
      <Image
        {...props}
        getEditorState={_state.getEditorState}
        setEditorState={_state.setEditorState}
      />
    );
  };
  return {
    initialize: ({ getEditorState, setEditorState }) => {
      _state = { getEditorState, setEditorState };
    },
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) return null;
        const type = contentState.getEntity(entity).getType();
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

export { addImage, removeBlock };

export default createImageRenderPlugin;
