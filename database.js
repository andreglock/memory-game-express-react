import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const user = process.env.DB_USER;
const db = process.env.DB_NAME;
const pass = process.env.DB_PASS;

export async function connect() {
    const connectionString = `mongodb+srv://${user}:${pass}@cluster01.tq5v5.mongodb.net/${db}?retryWrites=true&w=majority`;

    mongoose.connection.on('error', (err) => console.log('ERROR:', err));
    mongoose.connection.on('connecting', () => console.log(">> Connecting"));
    mongoose.connection.on('disconnecting', () => console.log(">> Disconnecting"));
    mongoose.connection.on('disconnected', () => console.log(">> Disconnected"));

    await mongoose.connect(connectionString);
}

export async function disconnect () {
    await mongoose.disconnect();
}
