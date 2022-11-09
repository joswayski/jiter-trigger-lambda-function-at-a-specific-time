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
    await Jiter.Events.createEvent({
      destination: "YOUR_LAMBDA_URL",
      payload: JSON.stringify(payload),
      scheduledTime: dayjs().add(10, "seconds").toISOString(),
    });
  } catch (error) {
    console.error(error);
  }
};

main();
