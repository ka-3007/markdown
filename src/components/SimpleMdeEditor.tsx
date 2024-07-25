import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';
const ReactSimpleMdeEditor = dynamic(() => import('react-simplemde-editor'), { ssr: false });

type Props = {
  markdownValue: string;
  onChange: (value: string) => void;
};

export const SimpleMdeEditor = ({ markdownValue, onChange }: Props) => {
  const toolbarOptions = [
    {
      name: 'heading',
      action: (editor: any) => editor.toggleHeadingSmaller(),
      className: 'fa fa-header',
      title: '見出し',
    },
    {
      name: 'bold',
      action: (editor: any) => editor.toggleBold(),
      className: 'fa fa-bold',
      title: '太字',
    },
  ];

  const options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      toolbar: toolbarOptions,
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
    </>
  );
};
