const user = require('../server/db.json')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
        "A beautiful, smart, and loving person will be coming into your life.",
        "A dubious friend may be an enemy in camouflage.",
        "A faithful friend is a strong defense.",
        "A fresh start will put you on your way.",
        "A friend asks only for your time not your money."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    createUser: (req, res) => {
        console.log('New user created')

        const {first, last} = req.body


        const userName = {
            firstName: first,
            lastName: last,
            nickname: '',
        }

        user.push(userName)
        console.log(userName)


        res.status(200).send(user)
    },

    addNickname: (req, res) => {
        console.log('nickname added')
        console.log(req.body)
        const {nick} = req.body
        console.log(nick)


        if(user[0]){
            user[0].nickname = nick
            console.log(user[0].nickname)
            res.status(200).send(`Cool name! I'll call you ${user[0].nickname} instead of ${user[0].firstName}.`)
        } else {
            res.status(200).send('Please enter a first and last name.')
        }

    },

    deleteNick: (req, res) => {
        console.log('delete nick')

        if(user[0]){
            user[0].nickname = ''
            res.status(200).send(`Okay! I'll just call you ${user[0].firstName}.`)
        }  else{
            res.status(200).send('Please enter a first, last, and nickname.')
        }
    }
}