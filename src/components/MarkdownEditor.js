import React, { useState, useEffect } from 'react';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="textarea">
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Write your markdown here"
      />
    </div>
  );
}

export default MarkdownEditor;
