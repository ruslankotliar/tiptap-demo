import { Node } from '@tiptap/core';
import { mergeAttributes } from '@tiptap/core';

const ButtonNode = Node.create({
    name: 'button',

    group: 'inline',

    inline: true,

    atom: true, // Indicates it’s a self-contained node


    addAttributes() {
        return {
            label: {
                default: 'Click me!',
            }
        }
    },

    parseHTML() {
        return [
            {
                tag: 'button[data-type="custom-button"]'
            }
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return ['button', mergeAttributes({ 'data-type': 'custom-button' }, HTMLAttributes), HTMLAttributes.label];
    },

    addCommands() {
        return {
            insertButton: 
                (label) => 
                ({ commands } ) => {
                    return commands.insertContent({
                        type: this.name,
                        attrs: { label },
                    });
                }
        }
    }
})

export default ButtonNode;