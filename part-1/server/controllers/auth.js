const bcrypt = require('bcrypt')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
    


      for (let i = 0; i < users.length; i++) {
        let existing = bcrypt.compareSync(password, users[i].passHash)
        console.log(existing)
        console.log(users[i].username)
        if (users[i].username === username && existing) {
          console.log('this is working')
          delete users[i].passHash
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)

        const {username, email, firstName, lastName, password} = req.body
      

          const salt = bcrypt.genSaltSync(5);
          const passHash = bcrypt.hashSync(password, salt)

          let userObj = {
            passHash,
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,

          }
          console.log(userObj)
          users.push(userObj);
       
          console.log(users)
          res.status(200).send(req.body)
    }
}