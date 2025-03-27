import React, { useEffect, useState } from 'react';
import '../styles/Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('https://fitshareapi-b9588b2c11b9.herokuapp.com/notifications/', {
          credentials: 'include', // use if your API requires authentication
        });
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  if (loading) return <p>Loading notifications...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="notifications-container">
      <h2>Your Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <ul>
          {notifications.map((note) => (
            <li key={note.id}>
              <p>{note.message}</p>
              <small>{new Date(note.created_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
