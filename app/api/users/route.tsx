import { MongoClient } from "mongodb";

interface User {
  id: number;
  name: string;
}

export async function GET() {
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source

  try {
    // Check if the DATA_API_KEY is defined
    if (!process.env.DATA_API_KEY) {
      throw new Error("DATA_API_KEY environment variable is not set.");
    }

    // Connect to MongoDB Atlas
    const uri = process.env.DATA_API_KEY; // Use your API key here
    const client = new MongoClient(uri);
    await client.connect();

    // Retrieve users from MongoDB collection
    const db = client.db("Next13");
    const collection = db.collection("Users");
    const users = await collection.find().toArray();

    // Close the MongoDB connection
    await client.close();

    return new Response(JSON.stringify(users));
  } catch (err) {
    const error = err as Error;
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
