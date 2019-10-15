const mongoose = require('mongoose')
const Users = mongoose.model('Users')

module.exports = {

    async strore(req, res) {
        const user = await Users.create(req.body)
        return res.json(user)
    },

    async index(req, res) {
        const user = await Users.find({}).select('name')
        return res.json(user)
    }


}