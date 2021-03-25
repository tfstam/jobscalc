const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
  name: 'Tamires',
  avatar: 'https://avatars.githubusercontent.com/u/53486696?s=460&u=1272e680bc83888c97d640392981d6749df42c11&v=4',
  "monthly-budget": 3000, 
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))


module.exports = routes;