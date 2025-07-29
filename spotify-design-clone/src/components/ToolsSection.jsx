import React from 'react';

const ToolsSection = () => {
  const tools = [
    {
      id: 1,
      category: 'Tools',
      title: 'Performance Cards: Designing with Meaning and Empathy',
      description: 'Challenge the way you think and serve access-constrained users with these cards.',
      imageUrl: 'https://images.ctfassets.net/c1zhnszcah7h/1oqIt4961AMm6Miwn7CXur/afaf03f7f2dd7b14a86ad9d06b327ef5/Square_Performance_Cards_-_Header_2x.png?w=960&q=96',
    },
    {
      id: 2,
      category: 'Tools',
      title: 'Assessing Constraints: Making Products for all Users',
      description: 'The team behind Spotify Lite created this tool to ensure they\'re building products for the people around the world who face technological challenges.',
      imageUrl: 'https://images.ctfassets.net/c1zhnszcah7h/2Q0QpV8HucLaXo5Nlxc08L/252e877209d66f418ec4dff1051b05ac/Square_Toolkit_-_Heuristics_Toolkit_for_Constraints_2x.png?w=960&q=96',
    }
  ];

  return (
    <section className="tools" id="tools">
      <h2>Tools</h2>
      <p className="tools-subtitle">Our day-to-day resources</p>
      <div className="tool-grid">
        {tools.map(tool => (
          <div key={tool.id} className="tool-card">
            <img 
              src={tool.imageUrl} 
              alt={tool.title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x250/ff6b9d/ffffff?text=Spotify+Tools';
              }}
            />
            <div className="tool-content">
              <span className="article-category">{tool.category}</span>
              <h3 className="tool-title">{tool.title}</h3>
              <p className="tool-description">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#all-tools" className="view-all-link">View all tools</a>
    </section>
  );
};

export default ToolsSection;
