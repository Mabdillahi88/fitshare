import React, { useEffect, useState } from 'react';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await fetch('/api/achievements/');
      if (!response.ok) {
        throw new Error('Failed to fetch achievements');
      }
      const data = await response.json();
      setAchievements(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading achievements...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Your Achievements</h2>
      {achievements.length === 0 ? (
        <p>No achievements earned yet.</p>
      ) : (
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement.id}>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <p>
                <small>
                  Earned on: {new Date(achievement.date_earned).toLocaleDateString()}
                </small>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Achievements;
