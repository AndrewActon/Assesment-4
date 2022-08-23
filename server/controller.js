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
            lastName: last
        }

        user.push(userName)
        console.log(userName)

        res.status(200).send(user)
    }

}