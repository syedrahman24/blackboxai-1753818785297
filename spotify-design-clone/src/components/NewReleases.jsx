import React from 'react';
import ArticleCard from './ArticleCard';

const NewReleases = () => {
  const newReleases = [
    {
      id: 1,
      category: 'Behind The Scenes',
      title: 'Collaboration Secrets: Design X Engineering',
      description: 'Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!',
      imageUrl: 'https://images.ctfassets.net/c1zhnszcah7h/4ju4IHUsBgzPLahy5CrG1q/9be1c366372f11ce86457f94c8433a3e/Des___Eng_Square_2x__1_.png?w=960&q=96',
    },
    {
      id: 2,
      category: 'Q+A',
      title: 'Ask Spotify Design 07',
      description: 'How do you choose colors? Prioritize your workload? Govern a design system? Our community panel returns to answer your thoughtful questions.',
      imageUrl: 'https://images.ctfassets.net/c1zhnszcah7h/2RkzATyUPZPwky5deHFiX7/13868a52a44aac028b9d008a9b9720d5/Ask_Spotify_Header_2x.png?w=960&q=96',
    },
    {
      id: 3,
      category: 'Behind The Scenes',
      title: 'Making Moves: Designing Motion for 2022 Wrapped',
      description: 'Simple brief, complex executions: UX Motion Designer Ade shares his journey on bringing 2022 Wrapped\'s data stories to life.',
      imageUrl: 'https://images.ctfassets.net/c1zhnszcah7h/2szccTy52nQoUtiApSJIi2/2e8cc4fafaffd7edd9abf002506827ff/Header_01__1_.png?w=960&q=96',
    },
    {
      id: 4,
      category: 'Listen',
      title: 'Zoned 44',
      description: 'Journey up and through the cosmic soundscape to join ShroomCat for a misty mountaintop stomp.',
      imageUrl: 'https://images.ctfassets.net/c1zhnszcah7h/5IQ9QSXsU23Cen5grN5xQK/699b5031ff082edfbb2fd0e3691b5f95/Zoned_44_by_Faith_McAllister_2x.png?w=960&q=96',
    }
  ];

  return (
    <section className="new-releases">
      <div className="section">
        <h2>New Releases</h2>
        <div className="article-grid">
          {newReleases.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="pagination">
          <span className="page-number">01</span>
          <span className="page-divider">/</span>
          <span className="total-pages">15</span>
        </div>
        <a href="#stories" className="view-all-link">View all stories</a>
      </div>
    </section>
  );
};

export default NewReleases;
