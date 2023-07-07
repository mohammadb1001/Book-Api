const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'secret-key');
    req.user = decoded.user;
    next();
  } 
  catch (error) {
    console.error('Invalid token', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticate;
