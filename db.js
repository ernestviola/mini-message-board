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
  db.messages.append({
    text,
    user,
    added,
  });
};

export default db;
