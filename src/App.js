import React, { useEffect, useState } from 'react';

function TelegramWebApp() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      // Initialize the Telegram WebApp SDK
      window.Telegram.WebApp.ready();

      // Retrieve user data from Telegram
      const user = window.Telegram.WebApp.initDataUnsafe?.user;
      if (user) {
        setUserData(user);
      }
    }
  }, []);

  const sendDataToBot = () => {
    if (window.Telegram?.WebApp) {
      // Send data back to the Telegram bot
      window.Telegram.WebApp.sendData("Hello from the React web app!");
    }
  };

  return (
    <div className="App">
      {userData ? (
        <div>
          <h1>Hello, {userData.first_name} {userData.last_name}</h1>
          <p>Username: {userData.username}</p>
          <p>Telegram ID: {userData.id}</p>
          <button onClick={sendDataToBot}>Send Data to Bot</button>
        </div>
      ) : (
        <h1>Loading user data...</h1>
      )}
    </div>
  );
}

export default TelegramWebApp;
