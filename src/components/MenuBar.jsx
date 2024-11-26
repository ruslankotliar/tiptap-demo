const MenuBar = ({ editor }) => {
    if (!editor) {
      return null;
    }
  
    return (
      <div className="menu-bar">
        {/* toggle custom highlith */}
        <button
          onClick={() => editor.commands.toggleHighlight('red')}
          className={editor.isActive('customHighlight') ? 'is-active' : ''}
        >
          Custom Highlight
        </button>
        <button
          onClick={() => editor.commands.insertButton('Heyo digga!')}
        >
          Insert Button
        </button>
        {/* insert a table */}
        <button
            onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
        >
            Insert Table
        </button>
        {/* undo button */}
        <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
        >
            Undo
        </button>
        {/* redo button */}
        <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
        >
            Redo
        </button>
        {/* highlight text button */}
        <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
            Code Block
        </button>
        <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
            Bullet List
            </button>
            <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
            Ordered List
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => {
            const url = window.prompt('Enter the URL');
            if (url) {
              editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
            }
          }}
          className={editor.isActive('link') ? 'is-active' : ''}
        >
          Link
        </button>
        <button
          onClick={() => {
            const url = window.prompt('Enter the image URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
        >
          Image
        </button>
      </div>
    );
  };

  export default MenuBar;