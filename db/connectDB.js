import mongoose  from "mongoose";

const connectDB = async(DATABASEURL)=>{
    const DB_OPTIONS={
        dbName:'portfolio',
    }
 const data = await  mongoose.connect(DATABASEURL,DB_OPTIONS)
 if(data){
    console.log("database connection successfull.....")
 }
}


export default connectDB