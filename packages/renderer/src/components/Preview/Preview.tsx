import React, {Fragment, createElement, useEffect, useState} from 'react';
import {unified} from 'unified';
import remarkGfm from 'remark-gfm';
import rehypeReact from 'rehype-react';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import './preview.css';
import 'github-markdown-css/github-markdown.css';

interface Props {
  doc: string;
}

function useProcessor(text: string) {
  const [content, setContent] = useState<React.ReactElement>();
  useEffect(() => {
    unified()
      .use(remarkParse) // parse markdown
      .use(remarkGfm)
      .use(remarkRehype) // remark (markdown) to rehype (HTML)
      .use(rehypeReact, {createElement, Fragment})
      .process(text)
      .then(file => setContent(file.result));
  }, [text]);
  return content;
}
const Preview: React.FC<Props> = ({doc}) => {
  const content = useProcessor(doc);

  return <div className="preview markdown-body">{content}</div>;
};

export default Preview;
