import React, {useCallback, useState} from 'react';
import './app.css';
import Editor from './components/Editor';

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n');

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      <Editor
        onChange={handleDocChange}
        initialDoc={doc}
      />
    </div>
  );
};

export default App;
