import { Modifier, SelectionState, ContentState } from 'draft-js';

const removeBlock = (contentState: ContentState, blockKey: string) => {
  const afterKey = contentState.getKeyAfter(blockKey);
  const afterBlock = contentState.getBlockForKey(afterKey);
  let targetRange;

  if (
    afterBlock &&
    afterBlock.getType() === 'unstyled' &&
    afterBlock.getLength() === 0 &&
    afterBlock === contentState.getBlockMap().last()
  ) {
    targetRange = new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: afterKey,
      focusOffset: 0,
    });
  } else {
    targetRange = new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 1,
    });
  }

  const newContentState = Modifier.setBlockType(
    contentState,
    targetRange,
    'unstyled',
  );
  return Modifier.removeRange(newContentState, targetRange, 'backward');
};

export default removeBlock;
