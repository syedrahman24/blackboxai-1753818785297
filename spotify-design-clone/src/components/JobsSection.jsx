import React from 'react';

const JobsSection = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Product Designer',
      location: 'Stockholm, Sweden',
      department: 'Design'
    },
    {
      id: 2,
      title: 'UX Researcher',
      location: 'New York, USA',
      department: 'Research'
    },
    {
      id: 3,
      title: 'Design Systems Lead',
      location: 'London, UK',
      department: 'Design Systems'
    },
    {
      id: 4,
      title: 'Motion Designer',
      location: 'Los Angeles, USA',
      department: 'Motion'
    },
    {
      id: 5,
      title: 'Content Designer',
      location: 'Berlin, Germany',
      department: 'Content'
    },
    {
      id: 6,
      title: 'Design Operations Manager',
      location: 'Remote',
      department: 'Design Ops'
    }
  ];

  return (
    <section className="jobs" id="jobs">
      <div className="section">
        <h2>Jobs</h2>
        <p className="jobs-subtitle">Open roles at Spotify Design</p>
        <ul className="jobs-list">
          {jobs.map(job => (
            <li key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.location} • {job.department}</p>
            </li>
          ))}
        </ul>
        <a href="#team" className="view-all-link">View Team</a>
      </div>
    </section>
  );
};

export default JobsSection;
