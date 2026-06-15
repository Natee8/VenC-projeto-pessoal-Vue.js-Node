import "dotenv/config";
import OpenAI from "openai";

async function test() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  });

  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: "teste cachorro",
  });

  console.log("✅ Tamanho do embedding:", res.data[0].embedding.length);
}

test().catch(console.error);
