import { Mark, mergeAttributes } from '@tiptap/core';

const CustomHighlightMark = Mark.create({
    name: 'customHighlight',

    addOptions() {
        return {
            color: "green"
        }
    },

    addAttributes() {
        return {
            color: {
                default: this.options.color,
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'mark[data-custom-highlight]',
                getAttrs: (node) => ({
                    color: node.style.backgroundColor,
                })
            },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['mark', mergeAttributes({ 'data-custom-highlight': '', style: `background-color: ${HTMLAttributes.color}` }, HTMLAttributes), 0]
    },

    addCommands() {
        return {
            toggleHighlight: 
                (color) => 
                ({ commands }) => {
                    return commands.toggleMark(this.name, { color });
                },
        }
    }
})

export default CustomHighlightMark;