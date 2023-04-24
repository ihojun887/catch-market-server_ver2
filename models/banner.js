module.exports = function (sequelize, DataTypes) {
  const banner = sequelize.define("Banner", {
    imageUrl: {
      type: DataTypes.STRING(300),
      alowNull: false,
    },
    href: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  });
  return banner;
};
