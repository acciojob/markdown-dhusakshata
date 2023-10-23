import React, { useEffect, useState } from 'react';

function MarkdownPreview({ markdown }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    // You'll need a library like marked.js to convert markdown to HTML.
    // Here's an example of how you can use it:
    const marked = require('marked');
    setHtml(marked(markdown));
  }, [markdown]);

  return (
    <div className="preview">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default MarkdownPreview;
