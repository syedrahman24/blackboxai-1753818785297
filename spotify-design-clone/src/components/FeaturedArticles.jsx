import React from 'react';
import ArticleCard from './ArticleCard';

const FeaturedArticles = () => {
  const articles = [
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
      category: 'Methods',
      title: 'Navigating the Discovery Phase',
      description: 'Explore the essential steps and methodologies for successful project discovery in design thinking.',
      imageUrl: 'https://via.placeholder.com/300x200/4caf50/ffffff?text=Discovery+Phase',
    },
    {
      id: 5,
      category: 'Design Systems',
      title: 'Can I get an Encore? Spotify\'s Design System, Three Years On',
      description: 'A retrospective look at how Spotify\'s design system has evolved and matured over three years.',
      imageUrl: 'https://via.placeholder.com/300x200/2196f3/ffffff?text=Design+System',
    },
    {
      id: 6,
      category: 'Product Design',
      title: 'Designing for the World: An Introduction to Localization',
      description: 'Learn the fundamentals of designing products that work across different cultures and languages.',
      imageUrl: 'https://via.placeholder.com/300x200/9c27b0/ffffff?text=Localization',
    }
  ];

  return (
    <section className="featured-articles" id="stories">
      <h2>
        Featured articles
        <a href="#all-stories" className="view-all-link">View all stories →</a>
      </h2>
      <div className="article-grid">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
