module.exports = (sequelize, DataTypes) => {
const SACase = sequelize.define('SACase', {
    // Model attributes are defined here
    date:{
        type: DataTypes.DATEONLY
    },
    date1:{
        type:DataTypes.DATEONLY
    },
    EC: DataTypes.INTEGER,
    FS: DataTypes.INTEGER,
    GP: DataTypes.INTEGER,
    KZN: DataTypes.INTEGER,
    LP:	DataTypes.INTEGER,
    MP:DataTypes.INTEGER,
    NC :DataTypes.INTEGER,
    NW:DataTypes.INTEGER,
    WC:DataTypes.INTEGER,
    UNKNOWN:DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    source: DataTypes.STRING
});

return SACase;

};