import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import { useEffect } from "react";

const TextEditor = ({ handleEditorSave, content }) => {
    const editor = useEditor({
        extensions: [StarterKit, Blockquote, CodeBlock],
        content: content?.jsonContent || "<p>Start writing your blog...</p>",
    });

    useEffect(() => {
        if (editor && content?.jsonContent) {
            editor.commands.setContent(content.jsonContent);
        }
    }, [editor, content]);

    const handleEditorContent = (e) => {
        e.preventDefault();
        if (!editor) return;
        const html = editor.getHTML();
        const json = editor.getJSON();
        handleEditorSave({ htmlContent: html, jsonContent: json });
    };

    if (!editor) return null;

    return (
        <div className="text_editor_wrapper border border-gray-400 p-4 rounded-md shadow-sm">
            <div className="text_editor_tools flex gap-2 flex-wrap mb-3">
                <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive("paragraph") ? "is-active" : ""}>P</button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}>H1</button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}>H2</button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}>H3</button>
                <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "is-active" : ""}>B</button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive("italic") ? "is-active" : ""}>I</button>
                <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive("blockquote") ? "is-active" : ""}>❝</button>
                <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive("codeBlock") ? "is-active" : ""}>Code</button>
                <button onClick={() => editor.chain().focus().undo().run()}>Undo</button>
                <button onClick={() => editor.chain().focus().redo().run()}>Redo</button>
            </div>

            <EditorContent editor={editor} className="editor_area border rounded p-2 min-h-[200px]" />

            <button
                onClick={handleEditorContent}
                type="button"
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Save Content
            </button>
        </div>
    );
};

export default TextEditor;
