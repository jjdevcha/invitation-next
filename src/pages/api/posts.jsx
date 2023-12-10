import client from "@/libs/server/client";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const posts = await client.post.findMany();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch posts" });
  }
}
