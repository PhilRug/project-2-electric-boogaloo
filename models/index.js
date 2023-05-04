const User = require('./User');
const Plant = require('./Plant');
const Pin = require('./Pin');

//User-Plant Associations (not even sure if this is needed with pin)
//other option is make a strictly intermediary model named UserPlant
User.hasMany(Plant, {
  through: {
    model: Pin,
    foreignKey: 'user_id'
  }
});

Plant.belongsToMany(User, {
  through: {
    model: Pin, 
    foreignKey: 'plant_id'
  }
});

//Pin-User Associations
//pinc can only have one user associated to it
Pin.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Pin, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//Pin-Plant Associations
//pin can only have one plant associated to it
Pin.belongsTo(Plant, {
  foreignKey: 'plant_id',
})

//plant can have many pins
Plant.hasMany(Pin, {
  foreignKey: 'plant_id',
  onDelete: 'CASCADE'
})

module.exports = { User, Plant, Pin };
