import type { NextApiRequest, NextApiResponse } from "next";
import { getAllLabGadget} from "../../../lib/other/getOther";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      const labGadgets = await getAllLabGadget();
      
      return res.status(200).json(labGadgets)
    } catch (error) {
      return res.status(401).send({ status: "someThing went wrong", data: {} });
    }
  }

