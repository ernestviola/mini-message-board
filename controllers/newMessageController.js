import { newMessage } from '../db/queries.js';

const newMessageController = {
  get: (req, res) => {
    res.render('newMessage');
  },

  post: async (req, res) => {
    try {
      const { username, message } = req.body;
      await newMessage(username, message);
      res.redirect('/');
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Error');
    }
  },
};

export default newMessageController;
