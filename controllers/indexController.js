import { getAllMessages } from '../db/queries.js';

const indexController = {
  get: async (req, res) => {
    const messages = await getAllMessages();
    res.render('index', {
      messages: messages,
    });
  },
};

export default indexController;
