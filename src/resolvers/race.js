const {
  Race,
  Country,
  City,
  RaceType,
  State,
  Region,
  RaceUserBookMark,
  RaceFinishStories,
} = require("../models");

const raceresolvers = {
  races: async () => {
    return await Race.findAll();
  },
  race: async ({ raceId }) => {
    return await Race.findByPk(raceId);
  },
  updateRace: async ({
    raceId,
    raceName,
    raceType,
    isFeatured,
    cityName,
    countryName,
    regionName,
    stateName,
    raceComments,
    yoskaProgramLink,
    raceWebsite,
    raceRegistrationLink,
    raceStatus,
    raceRatings,
  }) => {
    const race = await Race.findByPk(raceId);
    await race.update({
      raceName,
      raceStatus,
      isFeatured,
      raceComments,
      raceRatings,
      raceRegistrationLink,
      raceWebsite,
      yoskaProgramLink,
      raceCity: raceCity,
    });
    return "sucessfully updated";
  },
  createRace: async ({
    raceName,
    raceType,
    isFeatured,
    cityName,
    countryName,
    regionName,
    stateName,
    raceComments,
    yoskaProgramLink,
    raceWebsite,
    raceRegistrationLink,
    raceStatus,
    raceRatings,
  }) => {
    const city = await City.create({ cityName });
    const raceTypes = await RaceType.create({ raceTypeName: raceType });

    const race = await Race.create({
      raceName,
      raceType: raceTypes.raceTypeId,
      raceStatus,
      isFeatured,
      raceComments,
      raceRatings,
      raceRegistrationLink,
      raceWebsite,
      yoskaProgramLink,
      raceCity: city.cityId,
    });

    const stories = await RaceFinishStories.create({ raceId: race.raceId });
    const user = await RaceUserBookMark.create({ raceId: race.raceId });

    console.log("stories and ", stories);
    console.log("user Type", user);
    console.log("race Type", race);

    return "success!";
  },

  deleteRace: async ({ raceId }) => {
    const deletedCount = await Race.destroy({ where: { raceId } });
    return deletedCount;
  },
};

module.exports = { raceresolvers };
