import { Client } from 'pg';

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
message TEXT,
added DATE
);

INSERT INTO messages (username,message,added)
VALUES
('Amando','Hi there!','2026-04-26'),
('Charles','Hello World!','2026-04-26');
`;

async function main() {
  console.log('seeding...');
  const dbString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
  console.log(dbString);
  const client = new Client({
    connectionString: dbString,
  });

  await client.connect();
  const result = await client.query(SQL);
  console.log(result);
  await client.end();
  console.log('done');
}

main();
