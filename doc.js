import dotenv from 'dotenv';
import express from 'express';
import getLogger from './util/logger';

dotenv.config();
const logger = getLogger(__filename.slice(__dirname.length + 1, -3));

// Doc Server
const app = express();
app.use(express.static('./doc'));

// Listen
app
  .listen(process.env.DOC_PORT || 4000)
  .on('listening', () => {
    logger.info(
      `lonefire Js Doc Server is listening on port ${process.env.DOC_PORT ||
        4000}`
    );
  })
  .on('error', err => {
    logger.error(err);
  });