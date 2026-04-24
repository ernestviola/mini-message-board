import db from '../db.js';

const indexController = {
  get: (req, res) => {
    const messages = db.messages.sort((a, b) => (a.added > b.added ? -1 : 1));
    res.render('index', {
      messages: messages,
    });
  },
};

export default indexController;
