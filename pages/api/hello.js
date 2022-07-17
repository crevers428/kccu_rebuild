import pool from '../../config/db';

export default function handler(req, res) {
  pool.query("select * from kccu.USERS", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.status(200).json({ name: result[0].USER_NAME })
  });
}
