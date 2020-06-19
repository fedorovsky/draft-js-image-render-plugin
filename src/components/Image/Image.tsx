import * as React from 'react';
import { ContentBlock, ContentState, EditorState } from 'draft-js';
import { removeBlock } from '../../plugin/draft-js-image-render-plugin';

import * as Styled from './Image.styled';

interface OwnProps {
  block: ContentBlock;
  contentState: ContentState;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
}

const Image: React.FC<OwnProps> = ({ block, contentState, ...props }) => {
  const { src, height, width, alt } = contentState
    .getEntity(block.getEntityAt(0))
    .getData();

  React.useEffect(() => {
    console.log('image', props);
  }, []);

  const handleDelete = () => {
    const editorState = props.getEditorState();
    const setEditorState = props.setEditorState;

    const selectionState = editorState.getSelection();
    const newContentState = removeBlock(contentState, selectionState.getFocusKey());
    setEditorState(
      EditorState.push(editorState, newContentState, 'delete-character'),
    );
  };

  return (
    <Styled.ImageWrapper>
      <button onClick={handleDelete}>DELETE IMAGE</button>
      <Styled.Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        {...props}
        role="presentation"
      />
    </Styled.ImageWrapper>
  );
};

export default Image;
