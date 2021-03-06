const bcrypt = require("bcrypt");

module.exports = { 
    register: async (req, res) => {
        const {email, username, password } = req.body; 
        const db = req.app.get('db');
        const foundUser = await db.find_user_by_email(email);
        if(foundUser.length) { 
            res.status(400).send("User already exists")
        } else {
            const saltRounds = 12;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt)
            const [newUser] = await db.create_user([email, username, hashedPassword])
            req.session.user = newUser;
            res.sendStatus(200);
        }
    },
    login: (req, res) => {
        const  { email, password } = req.body;
        const db = req.app.get("db");
        db.find_user_by_email(email).then(([foundUser]) => {
            if(!foundUser) {
                res.status(400).send("User not found");
            } else {
                bcrypt.compare(password, foundUser.password).then(isAuthenticated => {
                    if(isAuthenticated) {
                        req.session.user = {
                            user_id: foundUser.user_id,
                            username: foundUser.username,
                            email: foundUser.email
                        } 
                        res.status(200).send(req.session.user)
                    } else {
                        res.status(400).send("You are not a user!")
                    }
                })
            }
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    userSession: (req, res) => {
        res.status(200).send(req.session.user)
    },
    updateEmail: async (req, res) => {
        const { email } = req.body;
        const { user_id } = req.session.user;
        const db = req.app.get("db");
        const updatedEmail = await db.update_email([email, user_id])
        res.status(200).send(updatedEmail)
    }
}