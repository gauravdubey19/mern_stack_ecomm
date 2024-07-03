// import { MongoClient, Db } from "mongodb";

// const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_DB = process.env.MONGODB_DB;

// interface Cached {
//   conn: { client: MongoClient; db: Db } | null;
//   promise: Promise<{ client: MongoClient; db: Db }> | null;
// }

// declare global {
//   // eslint-disable-next-line no-var
//   var mongo: Cached;
// }

// global.mongo = global.mongo || { conn: null, promise: null };

// const cached = global.mongo;

// export async function connectToDatabase(): Promise<{
//   client: MongoClient;
//   db: Db;
// }> {
//   if (!MONGODB_URI) {
//     throw new Error(
//       "Please define the MONGODB_URI environment variable inside .env.local"
//     );
//   }

//   if (!MONGODB_DB) {
//     throw new Error(
//       "Please define the MONGODB_DB environment variable inside .env.local"
//     );
//   }

//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
//       return {
//         client,
//         db: client.db(MONGODB_DB),
//       };
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
