import User from "../models/user.model.js";
export const validateRol = (rolAuth) => async (req, res, next) => {
  try {
    const userFound = await User.findById(req.user.id);
    if(Array.isArray(rolAuth)){
      if (!rolAuth.includes(userFound.rol)) {
        return res.status(401).json("Not found" );
      }
    }
    else{
      if (rolAuth !== userFound.rol)
        return res.status(401).json("Not found" );
    }
    next();
  } catch (error) {
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
