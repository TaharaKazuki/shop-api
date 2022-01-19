import { Request, Response, NextFunction } from 'express'
type IFunc = (req: Request, res: Response, next: NextFunction) => Promise<void>

const asyncHandler =
  (func: IFunc) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(func(req, res, next)).catch(next)

export default asyncHandler
