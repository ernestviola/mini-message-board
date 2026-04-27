import pool from './pool.js';

const getAllMessages = async () => {
  const { rows } = await pool.query(
    'select * from messages order by added desc;',
  );
  return rows;
};

const newMessage = async (username, message) => {
  const date = new Date().toISOString();
  await pool.query(
    'insert into messages (username,message,added) values ($1,$2,$3)',
    [username, message, date],
  );
};

export { getAllMessages, newMessage };
