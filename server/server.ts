import {app} from './app';
require('dotenv').config();

// Path: server/server.ts   
app.listen(process.env.PORT, () => {
  console.log(`Server listening with port ${process.env.PORT}`);
});