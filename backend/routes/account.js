const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware');
const { Account } = require('../db')


//balance route

router.post('/balance', authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        message: account.balance
    })
})


module.exports = router