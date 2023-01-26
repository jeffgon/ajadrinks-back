import { ObjectId } from "mongodb";
import { productsCollection } from "../database/db.js";

export async function getProducts(req, res) {
  try {
    const products = await productsCollection.find().toArray();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getProductById(req, res) {
  const { id } = req.params;

  try {
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });
    if (!product) {
      return res.sendStatus(404);
    }

    res.send(product);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
