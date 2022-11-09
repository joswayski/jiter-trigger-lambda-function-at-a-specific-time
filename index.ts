import Jiter from "@jiter/node";
import * as dayjs from "dayjs";

Jiter.init({
  apiKey: "YOUR_API_KEY",
  signingSecret: "YOUR_SIGNING_SECRET", // https://docs.jiter.dev/verifying-signatures
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
