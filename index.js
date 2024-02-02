const Expo = require("expo-server-sdk").default;

const expo = new Expo();

const TOKEN = process.argv[2];

async function setNotication(token) {
  if (Expo.isExpoPushToken()) {
    const response = await expo.sendPushNotificationsAsync([
      {
        to: token,
        title: "Mosam Notification",
        body: "ITs is gonna be very hot today",
        data: { temp: 30, Wind: 1 },
      },
    ]);
  } else {
    console.log("This is a invalid token");
  }
}

setNotication(TOKEN);
