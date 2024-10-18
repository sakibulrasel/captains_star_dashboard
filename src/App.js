import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      // Initialize the Telegram WebApp SDK
      window.Telegram.WebApp.ready();

      // Retrieve user data
      const user = window.Telegram.WebApp.initDataUnsafe?.user;
      if (user) {
        setUserData(user);
      }
    }
  }, []);

  return (
    <div className="App">
      {userData ? (
        <div>
          <h1>Welcome, {userData.first_name} {userData.last_name}</h1>
          <p>Username: {userData.username}</p>
          <p>Telegram ID: {userData.id}</p>
        </div>
      ) : (
        <h1>Loading user data...</h1>
      )}
    </div>
  );
}

export default App;
