"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var draft_js_1 = require("draft-js");
var removeBlock = function (contentState, blockKey) {
    var afterKey = contentState.getKeyAfter(blockKey);
    var afterBlock = contentState.getBlockForKey(afterKey);
    var targetRange;
    if (afterBlock &&
        afterBlock.getType() === 'unstyled' &&
        afterBlock.getLength() === 0 &&
        afterBlock === contentState.getBlockMap().last()) {
        targetRange = new draft_js_1.SelectionState({
            anchorKey: blockKey,
            anchorOffset: 0,
            focusKey: afterKey,
            focusOffset: 0,
        });
    }
    else {
        targetRange = new draft_js_1.SelectionState({
            anchorKey: blockKey,
            anchorOffset: 0,
            focusKey: blockKey,
            focusOffset: 1,
        });
    }
    var newContentState = draft_js_1.Modifier.setBlockType(contentState, targetRange, 'unstyled');
    return draft_js_1.Modifier.removeRange(newContentState, targetRange, 'backward');
};
exports.default = removeBlock;
