// schema.js
const { buildSchema } = require("graphql");

const schema = `
  type Race {
    raceId: ID!
    raceName: String
    raceType: String
    raceCity:Int
    isFeatured:Boolean
    raceRatings:Int
    raceComments:String
    yoskaProgramLink:String
    raceWebsite:String
    raceRegistrationLink:String
    createdAt:String
  }
  type User {
    id: ID
    password: String
    email: String
  }
  type UserOtp {
    id: ID!
    mobilenumber:String!
    verificationcode:String!
    issuccessfull:Boolean!
    attempttime:String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    races: [Race]
    race(raceId: ID!): Race
    usersotp:[UserOtp!]
    userotp(id: ID!): UserOtp

  }
  type MobileOTPValidationResponse {
    status: String!
    message: String!
  }
  
 
  type Mutation {
    createUser(password: String!, email: String!): User
    createUserotp(mobilenumber: String!, verificationcode: String!,issuccessfull:Boolean!): MobileOTPValidationResponse!
    createRace(
      raceName: String,
       raceType: String ,
       isFeatured:Boolean,
       cityName:String,
       countryName:String,
       regionName:String,
       stateName:String,
       raceComments:String,
       yoskaProgramLink:String,
       raceWebsite:String,
       raceRegistrationLink:String,
       raceStatus:Int
       raceRatings:Int
       
       
       ): String!

       deleteRace(raceId:ID!): Int
       deleteRecord(id:ID!): Int

       updateRace(
        raceId:ID!
        raceName: String,
         raceType: String ,
         isFeatured:Boolean,
         cityName:String,
         countryName:String,
         regionName:String,
         stateName:String,
         raceComments:String,
         yoskaProgramLink:String,
         raceWebsite:String,
         raceRegistrationLink:String,
         raceStatus:Int
         raceRatings:Int
         
         
         ): String!
  }
`;

module.exports = { schema };
