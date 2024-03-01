import { NextApiRequest, NextApiResponse } from "next";

// Define an array of allowed origins
const allowedOrigins = [
  "https://contribuverse.vercel.app",
  "http://localhost:4200",
];

const allowCors =
  (fn: (req: NextApiRequest, res: NextApiResponse) => Promise<unknown>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    // Check if the request origin is in the list of allowed origins
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    await fn(req, res);
  };

export default allowCors;
