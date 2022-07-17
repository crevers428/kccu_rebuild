const {createPool} = require('mysql');
const { DB_NAME, DB_SERVER, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

const pool = createPool({
    host: DB_SERVER,
    port: DB_PORT,
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

// export default async function excuteQuery({ query, values }) {
//     try {
//         console.log(`DB_NAME: ${DB_NAME}`);
//         const results = await db.query(query, values);
//         await db.end();
//         return results;
//     } catch (error) {
//         return { error };
//     }
// }