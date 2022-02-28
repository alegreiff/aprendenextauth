import bcrypt from "bcrypt";
import Users from "../../utils/models/UserModel";

export default async function handler(req, res) {
  const body = req.body;
  const user = await Users.findOne({ email: body.email });
  if (user) {
    res.status(200).json({ message: "Usuario ya registrado" });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(body.password, salt);
  const newuser = new Users({ email: body.email, password: hashpass });
  await newuser.save();
  res.status(200).json({ message: "Registro etsitoso" });
}

/* 
.then((doc) => res.status(201).send(doc));
*/
