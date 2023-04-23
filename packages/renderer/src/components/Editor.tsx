import React, {useCallback, useEffect} from 'react';
import './editor.css';
import useCodeMirror from '../hooks/use-codemirror';

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = ({initialDoc, onChange}) => {
  //const handleChange = useCallback(state => onChange(state.doc.toString()), [onChange]);
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc,
    onChange: () => {},
  });

  useEffect(() => {
    if (editorView) {
      // nothing for now
    }
  }, [editorView]);
  return (
    <div
      className="editor-wrapper"
      ref={refContainer}
    ></div>
  );
};

export default Editor;
