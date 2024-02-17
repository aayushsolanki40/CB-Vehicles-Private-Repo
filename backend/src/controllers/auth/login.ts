import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../../models/user/user";
import { HttpError } from "../../helpers";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  };

  if (!user.token) {
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1w",
    });
    await User.findByIdAndUpdate(user._id, { token });

    res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      membership: user.membership,
      accountType: user.accountType,
      email,
      token,
    });
  }

  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    membership: user.membership,
    accountType: user.accountType,
    email,
    token: user.token,
  });
};

export default login;
