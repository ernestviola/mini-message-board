import db from '../db.js';

const newMessageController = {
  get: (req, res) => {
    res.render('newMessage');
  },

  post: async (req, res) => {
    try {
      await db.addMessage(req.body.message, req.body.user);
      res.redirect('/');
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Error');
    }
  },
};

export default newMessageController;
