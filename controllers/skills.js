const skillsDB = require('../models/skill')

function index(req, res, next) {
  res.render('skills/index', {
    skills: skillsDB.getAll()
  })
}
function show(req, res, next) {
  console.log(req.params, 'Here be those req.params you asked for');
  res.render('skills/show', {
    skill: skillsDB.getOne(req.params.id)
  })
}

module.exports = {
  index,
  show
}
