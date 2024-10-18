import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios.get('/api/users')
    //   .then(response => setUsers(response.data))
    //   .catch(error => console.error('Error fetching users:', error));
    // Check if Telegram WebApp SDK is available
    if (window.Telegram?.WebApp) {
      // Initialize Telegram WebApp
      window.Telegram.WebApp.onEvent('webview_ready', () => {
        // Get user information
        const user = window.Telegram.WebApp.initDataUnsafe.user;

        // Store user data in state
        if (user) {
          setUsers(user);
        }

        // Expand the web app to full screen
        window.Telegram.WebApp.expand();
      });

      // Send data back to the bot when the user submits data
      window.Telegram.WebApp.sendData("Sample data from React WebApp");
    }
  }, []);

  return (
    <div className="App">
      <h1>Tap to Earn Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Telegram ID</th>
            <th>Balance</th>
            <th>Referral Count</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.telegramId}>
              <td>{user.telegramId}</td>
              <td>{user.balance}</td>
              <td>{user.referralCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
