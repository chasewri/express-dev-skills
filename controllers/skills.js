const skillsDB = require('../models/skill')

function index(req, res, next) {
  res.render('skills/index', {
    title: 'Dev Skills List',
    skills: skillsDB.getAll(),
  })
}
function show(req, res, next) {
  console.log(req.params, 'Here be those req.params you asked for');
  res.render('skills/show', {
    title: 'Skill Details',
    skill: skillsDB.getOne(req.params.id),
  })
}
function newSkill(req, res, next) {
  res.render('skills/new', {
    title: 'Add a New Skill'
  })
}
function create(req, res, next) {
  console.log(req.body);
  skillsDB.create(req.body);
  res.redirect('/skills')  
}
function deleteSkill(req, res) {
  skillsDB.deleteOne(req.params.id);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  newSkill,
  create,
  delete: deleteSkill,
}
