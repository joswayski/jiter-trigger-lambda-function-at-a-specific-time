import Jiter from "@jiter/node";
import * as dayjs from "dayjs";

Jiter.init({
  apiKey: "578fcffe-4fc7-4fc1-bca5-59c4ac0787fc",
  signingSecret: "YOUR_SIGNING_SECRET",
});

const main = async () => {
  try {
    const payload = {
      action: "Appointment.Payout",
      userId: "87",
      amount: 8950,
    };

    const now = dayjs();
    const scheduledTime = now.add(10, "seconds").toISOString();

    console.log(`Sending event...`);
    await Jiter.Events.createEvent({
      destination:
        "https://llcjwn3j7t627y4o6wryye4pp40zfcvm.lambda-url.us-east-1.on.aws/",
      payload: JSON.stringify(payload),
      scheduledTime,
    });

    console.log(`Sent!`);
  } catch (error) {
    console.error(error);
  }
};

main();
