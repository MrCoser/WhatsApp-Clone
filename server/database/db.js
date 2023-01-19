import mongoose from 'mongoose';

const Connection=async (username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-bdioxj1-shard-00-00.aooysbx.mongodb.net:27017,ac-bdioxj1-shard-00-01.aooysbx.mongodb.net:27017,ac-bdioxj1-shard-00-02.aooysbx.mongodb.net:27017/?ssl=true&replicaSet=atlas-ofoyc2-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
      
  await mongoose.connect(URL);
  console.log(`database connected successfully`);
    }catch(error){
  console.log('Error: while connecting with database',error.message);
    }
};

export default Connection;