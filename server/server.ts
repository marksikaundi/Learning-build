import {app} from './app';
import connectDB from './utils/db';
require('dotenv').config();

// Path: server/server.ts   
app.listen(process.env.PORT, () => {
  console.log(`Server listening with port ${process.env.PORT}`);
  connectDB();
});