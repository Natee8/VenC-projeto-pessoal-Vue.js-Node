import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";

export class VectorSearchService {
  private openai: OpenAI;
  private pinecone: Pinecone;
  private index;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);

    this.pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    });

    this.index = this.pinecone.index("services");
  }

  private async generateEmbedding(text: string): Promise<number[]> {
    const res = await this.openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    return res.data[0].embedding;
  }

  async indexService(input: { id: number; text: string }) {
    const embedding = await this.generateEmbedding(input.text);

    await this.index.upsert({
      records: [
        {
          id: input.id.toString(),
          values: embedding,
        },
      ],
    });
  }

  async search(text: string, topK = 5): Promise<number[]> {
    const embedding = await this.generateEmbedding(text);

    const result = await this.index.query({
      vector: embedding,
      topK,
    });

    return result.matches?.map((m) => Number(m.id)) || [];
  }

  async delete(id: number) {
    await this.index.deleteOne({
      id: id.toString(),
    });
  }
}
