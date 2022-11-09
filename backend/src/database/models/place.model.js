module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('place', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: 'userId',
    },
    name: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    logitude: DataTypes.FLOAT,
    status: DataTypes.STRING,
  }, { updatedAt: false });

  Place.associate = (models) => {
    Place.belongsTo(models.user, { foreignKey: 'userId' });
  };

  return Place;
};
