const { signinresolvers } = require("./userfirebasesiginin");
const { raceresolvers } = require("./race");
const {otpresolvers}=require("./firebaseOtp")
const resolvers = Object.assign(signinresolvers, raceresolvers,otpresolvers);
console.log("userresolver", resolvers);

module.exports = { resolvers };
