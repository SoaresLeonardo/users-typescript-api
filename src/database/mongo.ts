import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    try {
      const url = process.env.MONGODB_URL || "localhost:8080";
      const username = process.env.MONGODB_USERNAME;
      const password = process.env.MONGODB_PASSWORD;

      const client = new Mongo(url, { auth: { username, password } });
      const db = client.db("users-db");

      this.client = client;
      this.db = db;

      console.log('Connected to Mongo')
    } catch (error) {
      console.log("Error connection");
    }
  },
};
