import * as React from 'react';
import PluginEditor from 'draft-js-plugins-editor';
import createFocusPlugin from 'draft-js-focus-plugin';
import { composeDecorators } from 'draft-js-plugins-editor';
import ReactJson from 'react-json-view';
import { convertToRaw, EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import createImageRenderPlugin, {
  addImage,
} from '../../plugin/draft-js-image-render-plugin';
import Image from '../Image';
import { Wrapper } from './Editor.styled';

const focusPlugin = createFocusPlugin();

console.log(composeDecorators(focusPlugin.decorator))

export const imageRenderPlugin = createImageRenderPlugin({
  imageComponent: Image,
  decorator: composeDecorators(focusPlugin.decorator),
});

const plugins = [focusPlugin, imageRenderPlugin];

const getCharCount = (editorState: EditorState) => {
  const plainText = editorState.getCurrentContent().getPlainText('');
  const cleanString = plainText.trim();
  return cleanString.length;
}

const Editor = () => {
  const editorRef = React.useRef<PluginEditor | null>(null);

  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleChangeEditor = (state: EditorState) => {
    setEditorState(state);
  };

  const html = React.useMemo(() => {
    const currentContent = editorState.getCurrentContent();
    return stateToHTML(currentContent);
  }, [editorState]);

  const handleAddImage = () => {
    const newState = addImage(
      editorState,
      'https://via.placeholder.com/350x150',
      {},
    );
    setEditorState(newState);
  };

  return (
    <div>
      <Wrapper>
        <PluginEditor
          ref={editorRef}
          plugins={plugins}
          editorState={editorState}
          onChange={handleChangeEditor}
        />
      </Wrapper>
      <button onClick={handleAddImage}>ADD IMAGE</button>
      <p>COUNT: {getCharCount(editorState)}</p>
      <div>
        <h3>Result (HTML):</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <ReactJson
        src={convertToRaw(editorState.getCurrentContent())}
        collapsed={3}
      />
    </div>
  );
};

export default Editor;
