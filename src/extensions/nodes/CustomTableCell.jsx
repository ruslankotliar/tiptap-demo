import TableCell from '@tiptap/extension-table-cell';


const CustomTableCell = TableCell.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        class: {
          default: 'my-custom-cell',
        },
      };
    },
  });

  export default CustomTableCell;