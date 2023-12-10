import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";

async function handler(req, res) {
  console.log(req.body);
  const newPost = await client.post.create({
    data: {
      user: req.body.user,
      password: req.body.password,
      content: req.body.content,
    },
  });

  console.log(newPost);
  return res.status(200).end();
}

export default withHandler("POST", handler);
