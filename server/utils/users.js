// [{
//   id: '491y048y008yr0h',
//   name: '4g19h9bh',
//   room: 'qurh9hb91b'
// }]

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var resUser = this.users.filter((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return resUser[0];
  }
  getUser (id) {
    var resUser = this.users.filter((user) => user.id === id);
    return resUser[0];
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
