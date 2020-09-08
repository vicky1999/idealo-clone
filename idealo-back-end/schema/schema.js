const graphql=require('graphql');
const Trending=require('../models/trending');
const Popular=require('../models/popular');
const Bargains=require('../models/Bargains');

const {GraphQLString,GraphQLObjectType,GraphQLID,GraphQLSchema,GraphQLList} = graphql;

const TrendingType=new GraphQLObjectType({
    name:"Trending",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
});

const PopularType=new GraphQLObjectType({
    name: "Popular",
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        price: { type: GraphQLString},
        imageUrl: { type: GraphQLString}
    })
})

const BargainType= new GraphQLObjectType({
    name: "Bargain",
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        price: { type: GraphQLString},
        imageUrl: { type: GraphQLString}        
    })
})
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        trending: {
            type:GraphQLList(TrendingType),
            resolve(parent,args) {
                return Trending.find();
            }
        },
        popular: {
            type: GraphQLList(PopularType),
            resolve(parent,args) {
                return Popular.find();
            }
        },
        bargain: {
            type: GraphQLList(BargainType),
            resolve(parent,args) {
                return Bargains.find();
            }
        }
    }
})

module.exports=new GraphQLSchema({
    query: RootQuery
})