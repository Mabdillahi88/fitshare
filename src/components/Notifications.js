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
          credentials: 'include', // include credentials if authentication is needed
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch notifications: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched notifications:", data);
        // If data is an object with a 'results' key (e.g., paginated), use it; otherwise, assume it's an array.
        let notificationsArray = [];
        if (Array.isArray(data)) {
          notificationsArray = data;
        } else if (data.results && Array.isArray(data.results)) {
          notificationsArray = data.results;
        } else {
          // Fallback: log the unexpected data format and set as empty array
          console.error("Unexpected data format for notifications:", data);
        }
        setNotifications(notificationsArray);
      } catch (err) {
        console.error("Error fetching notifications:", err);
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
