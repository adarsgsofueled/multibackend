const { Sequelize } = require("sequelize");
const { Userfirebaseotp } = require("../models");
const MAX_ATTEMPTS = 3;
const BLOCK_DURATION = 0 * 0 * 0 * 1000; // 24 hours in millisecon

const otpresolvers = {
  usersotp: async () => {
    return await Userfirebaseotp.findAll();
  },
  userotp: async ({ id }) => {
    return await Userfirebaseotp.findByPk(id);
  },
  createUserotp: async ({ mobilenumber,verificationcode ,issuccessfull}) => {
    
    try {
       const userDat=await Userfirebaseotp.findOne({
        where: {
          mobilenumber,
          issuccessfull:true
        }}
       )
        if(userDat){
            return {
                status: 'error',
                message: 'Mobile number already exists',
              };
        }
            const lastAttempt = await Userfirebaseotp.findOne({
                where: {
                  mobilenumber,
                  attempttime: {
                    [Sequelize.Op.gte]: new Date(new Date() - BLOCK_DURATION),
                  },
                },
                order: [['attempttime', 'DESC']],
              });
              console.log("last Attempt",lastAttempt);

              if(lastAttempt && lastAttempt?.issuccessfull==false){
                return {
                    status: 'error',
                    message: 'Try after sometime',
                  };
              }
              const attemptsCount = await Userfirebaseotp.count({
                where: {
                  mobilenumber,

                  attempttime: {
                    [Sequelize.Op.gte]: new Date(new Date() - BLOCK_DURATION),
                  },
                },
              });
             console.log(attemptsCount);
             if (attemptsCount >= MAX_ATTEMPTS) {
                return {
                    status: 'error',
                    message: 'Maximum attempts reached',
                  };

             }
              if(issuccessfull==false ){
                const userDat=await Userfirebaseotp.findOne({
                    where: {
                      mobilenumber,
                      issuccessfull:false
                    }}
                   )
                    console.log("user",userDat);
                   if(userDat){
                   
                    const attempttime=Date.now()
                await userDat.update({
                  
                    mobilenumber,
                    verificationcode,
                    issuccessfull,
                    attempttime
                })

                return {
                    status: 'error',
                    message: 'Not verified with new attemptime',
                  };
                   }else{
                    const attempttime=Date.now()
                    await Userfirebaseotp.create({
                        mobilenumber,
                        verificationcode,
                        attempttime,
                        issuccessfull
                    })

                    return {
                        status: 'success',
                        message: 'Not verified with new document',
                      };
                   }
                
              }
              const attempttime=Date.now()
             const successfullUser=await Userfirebaseotp.create({
                mobilenumber,
                verificationcode,
                attempttime,
                issuccessfull
             })
             return {
                status: 'success',
                message: 'New user document created',
              };


      } catch (error) {
        return {
          status: 'Error',
          message: error.message,
        };
      }
    },
    deleteRecord: async ({ id }) => {
        console.log(id);
        const deletedCount = await Userfirebaseotp.destroy({ where: { id } });
        return deletedCount;
      },


};

module.exports = { otpresolvers };