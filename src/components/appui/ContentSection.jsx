import React, { useState } from 'react';

const dummyArticles = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Article Title ${i + 1}`,
  text: `This is a brief description of article ${i + 1}.`,
}));

const ContentSection = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <section className="content">
      <div className="view-toggle">
        <button onClick={() => setIsGrid(true)}>🔳 Grid</button>
        <button onClick={() => setIsGrid(false)}>📄 List</button>
      </div>
      <div className={`articles ${isGrid ? 'grid' : 'list'}`}>
        {dummyArticles.map(article => (
          <div key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
