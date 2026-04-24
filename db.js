const db = {};

db.messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

db.addMessage = async (text, user) => {
  db.messages.push({
    text,
    user,
    added: new Date(),
  });
};

export default db;
