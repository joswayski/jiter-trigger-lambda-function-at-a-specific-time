import Jiter from "@jiter/node";
import * as dayjs from "dayjs";

Jiter.init({
  apiKey: "YOUR_API_KEY",
  signingSecret: "YOUR_SIGNING_SECRET",
});

const main = async () => {
  try {
    const payload = {
      action: "Email.Welcome",
      userId: "87",
    };

    const now = dayjs();
    console.log(`Now: ${now.toISOString()}`);

    const scheduledTime = now.add(10, "seconds").toISOString();
    console.log(`Scheduled time: ${scheduledTime}`);

    console.log(`Sending event...`);
    await Jiter.Events.createEvent({
      destination: "YOUR_URL",
      payload: JSON.stringify(payload),
      scheduledTime,
    });

    console.log(`Sent!`);
  } catch (error) {
    console.error(error);
  }
};

main();
