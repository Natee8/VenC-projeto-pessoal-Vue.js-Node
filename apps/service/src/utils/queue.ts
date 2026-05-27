import { Queue } from "bullmq";

export const uploadQueue = new Queue("upload-image", {
  connection: {
    url: process.env.REDIS_URL,
  },
});
 