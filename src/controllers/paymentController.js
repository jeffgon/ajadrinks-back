import { ObjectID } from "bson";
import {
  paymentCollection,
  sessionsCollection,
  usersCollection,
} from "../database/db.js";

export async function payment(req, res) {
  const newPayment = req.body;
  const user = res.locals.user;
  // const token = req.headers.authorization?.replace("Bearer ", "");

  try {
    // const userSession = await sessionsCollection.findOne({ token });
    // if (!userSession) return res.status(404).send("Usuario não autorizado");

    // const user = await usersCollection.findOne({ _id: userSession.userId });
    // if (!user) return res.status(400).send("Usuario não encontrado!");

    await paymentCollection.insertOne({
      // user: user.name,
      user: user._id,
      nameCard: newPayment.nameCard,
      numberCard: newPayment.numberCard,
      validateCard: newPayment.validateCard,
      cvcCard: newPayment.cvcCard,
    });
    // const payments = await paymentCollection
    //   .find({ user: user.name })
    //   .toArray();
    res.send("pagamento realizado com sucesso");
  } catch (error) {
    res.status(500).send(error.message);
  }
}
