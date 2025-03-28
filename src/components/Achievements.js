import React, { useEffect, useState } from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await fetch('https://fitshareapi-b9588b2c11b9.herokuapp.com/achievements/', {
        credentials: 'include', // if authentication is required
      });
      if (!response.ok) {
        throw new Error('Failed to fetch achievements');
      }
      const data = await response.json();
      
      // If response is paginated, use data.results, else use data directly.
      const achievementsArray = data.results ? data.results : data;
      setAchievements(achievementsArray);
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
    <div className="achievements-container">
      <h2>Your Achievements</h2>
      {achievements.length === 0 ? (
        <p>No achievements earned yet.</p>
      ) : (
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement.id} className="achievement-item">
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
