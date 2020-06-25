# draft-js-image-render-plugin

### [Demo page](https://fedorovsky.github.io/draft-js-image-render-plugin/)

### Installation:
```npm i draft-js-image-render-plugin```

### Usage:

```javascript
import Editor from 'draft-js-plugins-editor';
import createImageRenderPlugin from 'draft-js-image-render-plugin';
``
export const imageRenderPlugin = createImageRenderPlugin();

const plugins = [imageRenderPlugin];

<Editor
    ref={editorRef}
    plugins={plugins}
    editorState={editorState}
    onChange={handleChangeEditor}
/>
```
