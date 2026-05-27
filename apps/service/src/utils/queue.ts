import { Queue } from "bullmq";

const isRedisEnabled = process.env.REDIS_ENABLED === "true";

export const uploadQueue = isRedisEnabled
  ? new Queue("upload-image", {
      connection: { url: process.env.REDIS_URL },
    })
  : null;
