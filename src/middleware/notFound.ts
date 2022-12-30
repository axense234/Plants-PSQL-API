import { Request, Response } from "express";

const notFoundMiddleware = async (req: Request, res: Response) => {
  return res.status(308).redirect("/plants");
};

export default notFoundMiddleware;
