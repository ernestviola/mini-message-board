import { body, validationResult, matchedData } from 'express-validator';
import { newMessage } from '../db/queries.js';

const validateMessage = [
  body('username')
    .trim()
    .isAlphanumeric()
    .isLength({ min: 1, max: 255 })
    .withMessage('Must be a username under 255 characters'),
  body('message'),
];

const newMessageController = {
  get: (req, res) => {
    res.render('newMessage');
  },

  post: [
    validateMessage,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('newMessage', { errors: errors.array() });
      }

      try {
        const { username, message } = matchedData(req);
        await newMessage(username, message);
        res.redirect('/');
      } catch (error) {
        console.log(error);
        res.status(500).send('Internal Error');
      }
    },
  ],
};

export default newMessageController;
