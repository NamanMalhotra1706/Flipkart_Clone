import mongoose from "mongoose";
import dotenv from 'dotenv';

export const Connection = async () =>{

  dotenv.config();

  const db_user=process.env.db_user;
  const db_password =process.env.db_password;
  const db_name=process.env.db_name;
  const dbUrl = `mongodb+srv://${db_user}:${db_password}@flipkart-clone-project.keiwy1z.mongodb.net/${db_name}?retryWrites=true&w=majority`
  
  mongoose.connect(dbUrl,{
      useNewUrlParser:true,
      useUnifiedTopology:true
  }).then(()=>{
      console.log(`Connection Successfully Made`);
  }).catch((err)=>console.log(`Connection error : `,err.message));
}

export default Connection;