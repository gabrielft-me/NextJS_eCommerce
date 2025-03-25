import mongoose from "mongoose";

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    console.log('Mongoose is already connected');
    return mongoose.connection.asPromise();
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Mongoose connected successfully');
  } catch (error) {
    console.error('Mongoose error:', error);
  }
}