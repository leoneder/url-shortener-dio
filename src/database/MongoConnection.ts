import mongoose from 'mongoose'
import { config } from '../config/Constants'
export class MongoConnection {
    public async connect(): Promise<void>{
        try {
            await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
            console.log("conectou no banco!")
        }
        catch(err){
            console.error(err.message)
            console.error(config.MONGO_CONNECTION)
            
        }
        
        
    }
}