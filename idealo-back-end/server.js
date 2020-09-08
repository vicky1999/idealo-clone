const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const graphql=require('express-graphql');

const schema=require('./schema/schema');

const url="mongodb+srv://"+process.argv[2]+":"+process.argv[3]+"@cluster0.ojokq.mongodb.net/idealo";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});
mongoose.connection.once("open", () => {
    console.log("DB connected!");
})

const app=express();
app.use(cors());

app.use('/graphql',graphql.graphqlHTTP({
    schema: schema,
    graphiql:true
}))


app.listen(3001, () => {
    console.log("Listening!")
})