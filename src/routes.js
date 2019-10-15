const express = require('express')
const routes = express.Router()


const Users = require('./controller/Users')


routes.post('/createUser', Users.strore)
routes.get('/index', Users.index)











module.exports = routes