import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../../auth"; 

const router = {
  session: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const session = await auth(); // Logika otentikasi
      res.status(200).json({ session });
    } catch {
      res.status(500).json({ error: "Failed to fetch session" });
    }
  },
};

export default router;
