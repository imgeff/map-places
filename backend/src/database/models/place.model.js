module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('place', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: 'userId',
    },
    name: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(7, 5),
    longitude: DataTypes.DECIMAL(7, 5),
    status: DataTypes.STRING,
  }, { updatedAt: false });

  Place.associate = (models) => {
    Place.belongsTo(models.user, { foreignKey: 'userId' });
  };

  return Place;
};
