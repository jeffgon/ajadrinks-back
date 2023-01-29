import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  console.log("Conectou com o mongoDB");
} catch (error) {
  console.error(error);
}

const db = mongoClient.db();

export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const productsCollection = db.collection("products");
export const paymentCollection = db.collection("payments");
// productsCollection.insertMany([
//   {
//     title: "caiprinha de limão gostoso",
//     img: "http://f.i.uol.com.br/folha/comida/images/16082336.jpeg",
//     description: "bbbbbbbbbbbbb bbbbbbbbbb bbbbbbbb",
//     category: "drink",
//     size: 300,
//     price: 15.5,
//   },
//   {
//     title: "sexy on the beach ",
//     img: "https://www.receiteria.com.br/wp-content/uploads/sex-on-the-beach-01.jpg",
//     description: "bbbbbbbbbbbbb bbbbbbbbbb bbbbbbbb",
//     category: "drink",
//     size: 200,
//     price: 40.5,
//   },
// ]);
