import { ObjectId } from "mongodb";
import { productsCollection } from "../database/db.js";

export  async function registerProduct(req, res){
  const newProduct = req.body;
  const checkSession = res.locals.sessions; //conferir

  try{
    const checkExistingProduct = await productsCollection.findOne({
      title: newProduct.title
    });
    if (checkExistingProduct){
      return res.status(400).send("Produto já cadastrado")
    }
    const dataProduct = await productsCollection.insertOne(
      {
        idUser: checkSession.idUser,
        title: newProduct.title,
        image: newProduct.image,
        category: newProduct.category,
        shortdescription: newProduct.shortdescription,
        description: newProduct.description,
        price: newProduct.price
      }
    )
    console.log(dataProduct);
    res.status(200).send("Novo produto cadastrado")
  }catch(error){
    res.status(500).send(error.message);
  }
}


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

