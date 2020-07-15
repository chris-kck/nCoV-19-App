module.exports = (sequelize, DataTypes) => {
const RSS = sequelize.define('RSS', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    link: {
        type:DataTypes.STRING
    }
});

return RSS;

};