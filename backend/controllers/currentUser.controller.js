import User from "../models/User.schema.js";


// for getting current loggedIn user
export const currentUser = async (req, res) => {
    const userId = req.user; 
    console.log(userId);
    
  const user = await User.findById(userId).select("-password");

   if (!user) {
    return res.status(404).json({ message: "Please login first" });
  }

  
  res.json(user);
};
