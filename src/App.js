import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
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
