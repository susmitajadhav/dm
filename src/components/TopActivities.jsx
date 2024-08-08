//topactivities.jsx
import React from 'react';

const TopActivities = () => {
  // Example activities
  const activities = [
    { id: 1, name: 'Hiking', description: 'Explore beautiful trails.' },
    { id: 2, name: 'Sightseeing', description: 'Discover historical landmarks.' },
    // Add more activities as needed
  ];

  return (
    <div className="top-activities">
      <h2>Top Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopActivities;
