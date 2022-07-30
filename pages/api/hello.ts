import {pool} from './config/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  pool.query("select * from kccu.Manager;", function (err, result) {
    
    if (err) throw err;
    console.log(result);
    res.status(200).json({ name: result[1].name })
  });
}
