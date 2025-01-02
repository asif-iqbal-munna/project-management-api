import mongoose from 'mongoose';
import app from './app';
import { Server } from 'http';

let server: Server;

async function main() {
  try {
    await mongoose.connect('');
    server = app.listen(5000, () => {
      console.log(`Example app listening on port `);
    });
  } catch (error) {
    console.log(`error: Not able to connect DB ${error}`);
  }
}

main();

process.on('unhandledRejection', () => {
  console.log(`😈 unhandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
