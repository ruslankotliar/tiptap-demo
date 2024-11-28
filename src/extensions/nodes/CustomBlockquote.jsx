import { mergeAttributes, Node } from '@tiptap/core';

const CustomBlockquote = Node.create({
  name: 'customBlockquote',

  group: 'block', // It belongs to block-level content
  content: 'block*', // Allows block-level content inside blockquote
  defining: true, // Marks this as a defining block

  addAttributes() {
    return {
      style: {
        default: 'border-left: 4px solid #ddd; padding-left: 10px; margin: 10px 0; color: #555;',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'blockquote',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['blockquote', mergeAttributes({ style: HTMLAttributes.style }, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      toggleCustomBlockquote:
        () =>
        ({ commands, editor }) => {
          console.log('Executing toggleWrap for customBlockquote...');
          const result = commands.toggleWrap(this.name);
          console.log('toggleWrap result:', result);
          return result;
        },
    };
  },
  
});

export default CustomBlockquote;
