import { useEffect, useState } from 'react';
import { PreviewMarkdown } from './PreviewMarkdown';
import { SimpleMdeEditor } from './SimpleMdeEditor';

export const MarkdownEditor = () => {
  const [markdownValue, setMarkdownValue] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('smde_saved_content') ?? '';
    setMarkdownValue(savedContent);
  }, []);

  const onChange = (value: string) => {
    setMarkdownValue(value);
  };

  return (
    <>
      <SimpleMdeEditor markdownValue={markdownValue} onChange={onChange} />
      <PreviewMarkdown markdownValue={markdownValue} />
    </>
  );
};
