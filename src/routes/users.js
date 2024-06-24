const express = require('express');
const { DateTime } = require('luxon');
const _ = require('lodash');

const router = express.Router();

let users = [];

router.post('/lend', (req, res) => {
  const { username, date } = req.body;

  if (!username || !date) {
    return res.status(400).json({ error: 'Username and date are required' });
  }

  const user = _.find(users, { username });

  if (user && user.borrowedAnything) {
    return res.status(400).json({ error: 'User already borrowed a book' });
  }

  if (user) {
    user.borrowedAnything = true;
    user.borrowedDate = DateTime.fromISO(date).toISO();
  } else {
    users.push({
      username,
      borrowedAnything: true,
      borrowedDate: DateTime.fromISO(date).toISO()
    });
  }

  res.status(200).json({ message: 'Book lent successfully' });
});

router.post('/return', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  const user = _.find(users, { username });

  if (!user || !user.borrowedAnything) {
    return res.status(400).json({ error: 'User has no borrowed book' });
  }

  user.borrowedAnything = false;
  user.borrowedDate = null;

  res.status(200).json({ message: 'Book returned successfully' });
});

router.get('/check-overdue', (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  const user = _.find(users, { username });

  if (!user || !user.borrowedAnything) {
    return res.status(400).json({ error: 'User has no borrowed book' });
  }

  const borrowedDate = DateTime.fromISO(user.borrowedDate);
  const now = DateTime.now();
  const diff = now.diff(borrowedDate, 'days').toObject().days;

  if (diff > 14) {
    return res.status(200).json({ overdue: true, daysOverdue: diff - 14 });
  }

  res.status(200).json({ overdue: false });
});

module.exports = router;
