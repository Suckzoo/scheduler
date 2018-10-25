module.exports = process.env.NODE_ENV ? 
    require(`./settings.${process.env.NODE_ENV}.json`) : 
    require('./settings.development.json')
