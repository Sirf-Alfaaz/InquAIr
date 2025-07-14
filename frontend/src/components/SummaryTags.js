import React from 'react';
import './SummaryTags.css';

function SummaryTags({ summary, tags }) {
  const handleTagClick = (tag) => {
    // You can replace this with chatbot question trigger
    alert(`You clicked tag: ${tag}`);
  };

  return (
    <div>
      <h2>Summary</h2>
      <p>{summary || "Upload a PDF to see summary."}</p>
      <h3>Tags</h3>
      <div className="tags-container">
        {tags && tags.map((tag, index) => (
          <span
            key={index}
            className="tag-badge"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SummaryTags;
