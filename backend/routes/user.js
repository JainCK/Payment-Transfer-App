const {User} = require('../db')
const router = express.Router();
const zod = require('zod');


const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post('/signup', async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if(!success) {
        return res.status(411).json({
            message :"Email Exists / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser) {
        return res.status(411).json({
            message: 'Email already taken/ Incorrect Inputs'
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.paaword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

})


module.exports = router