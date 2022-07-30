import {createPool} from "mysql";
const { DB_NAME, DB_SERVER, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

/*
*/
export const pool = createPool({
    host: DB_SERVER,
    port: Number(DB_PORT),
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
});

pool.getConnection((err) => {
    if(err){
        console.log(`Error getting connection: ${err}`);
    }
    console.log(`Connection established`);
});

module.exports = pool;
