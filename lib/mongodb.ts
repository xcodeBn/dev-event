import mongoose from 'mongoose';

// Define the MongoDB connection URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Validate that the MongoDB URI is defined
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Define the type for our cached connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend globalThis to include our mongoose cache (using __mongoose to avoid naming conflict)
declare global {
  // eslint-disable-next-line no-var
  var __mongoose: MongooseCache | undefined;
}

// Initialize the cache on globalThis to survive hot reloads in development
const cached: MongooseCache = globalThis.__mongoose || { conn: null, promise: null };

if (!globalThis.__mongoose) {
  globalThis.__mongoose = cached;
}

/**
 * Connects to MongoDB via Mongoose and caches the connection for reuse across hot reloads.
 *
 * Caches an in-flight connection promise to avoid duplicate connection attempts and stores the resolved connection for subsequent calls.
 *
 * @returns The connected Mongoose instance
 */
async function connectDB(): Promise<typeof mongoose> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Return existing connection promise if one is in progress
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disable command buffering for better error handling
    };

    // Create new connection promise
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    // Wait for the connection to resolve and cache it
    cached.conn = await cached.promise;
  } catch (e) {
    // Reset promise on error to allow retry
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;