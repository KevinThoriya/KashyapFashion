const dotenv = require("dotenv");

let env;
if (process.env.NODE_ENV === "production") env = ".env";
else if (process.env.NODE_ENV === "test") env = ".env.test";
else env = ".env.dev";

dotenv.config({
  path: env,
});

//////////////////////////////////////////////////////////////

const Bull = require("bull");

const sendEmailJob = require("./jobs/sendEmailJob");

const sendEmailQueue = new Bull("SendEmailQueue", process.env.REDIS_URL, {
  limiter: {
    // send no more than 8 emails per minute
    max: 8,
    duration: 60000,
  },
  defaultJobOptions: {
    priority: 2,
    removeOnComplete: true,
    // tries to resend 3 times one minute apart and fails if it takes longer than 10 seconds
    attempts: 3,
    backoff: {
      type: "fixed",
      delay: 60000,
    },
    timeout: 10000,
  },
});

exports.sendEmailQueue = sendEmailQueue;

exports.default = [
  {
    queue: sendEmailQueue,
    process: () => sendEmailQueue.process(sendEmailJob),
  },
];
