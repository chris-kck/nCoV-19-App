module.exports = (sequelize, DataTypes) => {
const WorldCase = sequelize.define('WorldCase', {
    // Model attributes are defined here
    Date_reported:{
        type: DataTypes.DATEONLY
    },
    Country_code:{
        type:DataTypes.STRING
    },
    Country:{
        type:DataTypes.STRING
    },
    WHO_region:{
        type:DataTypes.STRING
    },
    New_cases: DataTypes.INTEGER,
    Cumulative_cases: DataTypes.INTEGER,
    New_deaths:DataTypes.INTEGER,
    Cumulative_deaths: DataTypes.INTEGER,
});

return WorldCase;

};
