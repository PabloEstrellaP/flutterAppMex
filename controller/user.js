const { response } = require('express');
const { validarGoogleToken } = require('../helpers/validarConGoogle');

const Users = require('../models/users');

const googleAuth = async (req, res = response) => {
    const { token } = req.body

    const googleUser = await validarGoogleToken(token)
    try {
        if (!googleUser) {
        return res.status(400).json({
            ok: false,
            msg: 'No se verificó el token'
        })
        }
        const addNewUser = new Users({
            name: googleUser.name,
            email: googleUser.email,
            imgPath: googleUser.picture,
        })
        await addNewUser.save()

        return res.status(200).json({
        ok: true,
        msg: addNewUser,
        })
    } catch (error) {
        res.status(400).json({
        ok: false,
        msg: error
        })
    }
}

module.exports = {
    googleAuth
}