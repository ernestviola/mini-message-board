import db from '../db.js';

const newMessageController = {
  get: (req, res) => {
    res.render('newMessage');
  },

  post: async (req, res) => {
    try {
      await db.addMessage('TestMessage', 'TestUser');
      res.render('newMessage');
    } catch (error) {
      console.log('Error');
      res.status(500).send('Internal Error');
    }
  },
};

export default newMessageController;
