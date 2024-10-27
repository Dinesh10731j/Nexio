import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ReactQuillEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const ReactQuillEditor: React.FC<ReactQuillEditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'color',
    'background',
    'align',
  ];

  return (
    <div className="w-full flex justify-between items-center max-w-3xl mx-auto min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default ReactQuillEditor;
