import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';

export const PreviewMarkdown = ({ markdownValue }: { markdownValue: string }) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-left pl-4">プレビュー</h1>
      <div
        className="markdown-body p-4 border border-gray-300 h-72 overflow-y-auto"
        style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm, breaks]}>{markdownValue}</ReactMarkdown>
      </div>
    </>
  );
};
