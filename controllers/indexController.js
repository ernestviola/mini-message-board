import db from '../db.js';

const indexController = {
  get: (req, res) => {
    res.render('index', { messages: db.messages });
  },
};

export default indexController;
