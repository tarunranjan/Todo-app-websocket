import { createServer } from "http";
import { createApplication } from "./app.js";

import { PostgresTodoRepository } from "./todo-management/todo.repository.js";

const httpServer = createServer();

mongoose.connect('mongodb://localhost:27017/redisdemo',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection
        .once('open', ()=>console.log('connected to database'))
        .on('error',(err)=>console.log("connection to database failed!!",err))


const main = async () => {
  
}

main();
