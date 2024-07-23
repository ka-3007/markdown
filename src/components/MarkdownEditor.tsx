import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactSimpleMdeEditor = dynamic(() => import('react-simplemde-editor'), { ssr: false });
import 'easymde/dist/easymde.min.css';

import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';

export const MarkdownEditor = () => {
  const [markdownValue, setMarkdownValue] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('smde_saved_content') ?? '';
    setMarkdownValue(savedContent);
  }, []);

  const onChange = (value: string) => {
    setMarkdownValue(value);
  };

  // エディタの設定
  const options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      autosave: {
        enabled: true,
        uniqueId: 'saved_content',
        delay: 1000,
      },
    };
  }, []);

  return (
    <>
      <ReactSimpleMdeEditor value={markdownValue} onChange={onChange} options={options} />
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'left',
          paddingLeft: '1rem',
        }}
      >
        プレビュー
      </h1>
      <div
        className="markdown-body"
        style={{
          padding: '1rem',
          border: '1px solid #D1D5DB',
          height: '300px',
          overflowY: 'auto',
          fontFamily: 'inherit',
          fontSize: 'inherit',
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm, breaks]}>{markdownValue}</ReactMarkdown>
      </div>
    </>
  );
};
