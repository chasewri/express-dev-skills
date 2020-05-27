const skills = [
  {id: 0, description: 'I just learned how functions work last week!', skill: 'JavaScript?'},
  {id: 1, description: 'When I write CSS, it\'s usually a giant mess that is gross.', skill: 'Sometimes CSS'},
  {id: 2, description: 'I mean I know how to use some of the basic elements.', skill: 'HTML5'},
  {id: 3, description: 'Oh, I don\'t really know how to do this. One time I made a WordPress theme.', skill: 'PHP'},
  {id: 4, description: 'This is something that I\'m good at!', skill: 'Poorly organized code'},
  {id: 5, description: 'One time I set up a SQLite database with help...', skill: 'SQL'},
]

module.exports = {
  getAll,
  getOne,
  create
}

function getAll() {
  return skills
}
function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id))
}
function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}
