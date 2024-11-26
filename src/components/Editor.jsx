import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import MenuBar from './MenuBar';
import Highlight from '@tiptap/extension-highlight';
import CodeBlock from '@tiptap/extension-code-block';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import CustomTableCell from '../extensions/nodes/CustomTableCell';
import ButtonNode from '../extensions/nodes/ButtonNode';
import CustomHighlightMark from '../extensions/marks/CustomHighlightMark';


  const Editor = () => {
    const [content, setContent] = React.useState('');

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                // Disable built-in list extensions to use custom ones
                bulletList: false,
                orderedList: false,
                listItem: false,
            }),
            Placeholder.configure({
                placeholder: 'Write something …',
            }),
            Link.configure({
                openOnClick: false,
            }),
            Image,
            BulletList,
            OrderedList,
            ListItem,
            Highlight,
            CodeBlock.configure({
              languageClassPrefix: 'language-',
            }),
            Table.configure({
              resizable: true,
            }),
            TableRow,
            CustomTableCell,
            TableHeader,
            ButtonNode,
            CustomHighlightMark
        ],
        content,
        onUpdate: ({
            editor
        }) => {
            setContent(editor.getHTML());
        }
    })

    return (
        <div>
            {editor && <MenuBar editor={editor} />}

            <h2>Input</h2>
            <EditorContent editor={editor} />

            <h2>Output</h2>
            <div>{content}</div>
        </div>
    )
  }

export default Editor;
