const Sequelize = require('sequelize')

var db = {}

const sequelize = new Sequelize('brew_php_db', 'root', '', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  logging: true,
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false,
})

let models = [
  require('./models/User.js'),
]

// Initialize models
models.forEach(model => {
  const seqModel = model(sequelize, Sequelize)
  db[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db).forEach(key => {
  if ('associate' in db[key]) {
    db[key].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
