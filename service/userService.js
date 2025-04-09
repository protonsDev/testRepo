import User from "../database/models/userModel.js";

export const userSignUpService = async () => {
  try {
    const user = new User(data);

    return await user.save();
  } catch (error) {
    throw error;
  }
};

export const userLoginService = async (data) => {
  try {
    const user = new User(data);

    return await user.save();
  } catch (error) {
    throw error;
  }
};

export const updateUserService = async (data) =>{
 try{
  return await User.update(data,
    {where:{id:data.userId}}
    );
 }catch(error){
  throw error;
 }
}
