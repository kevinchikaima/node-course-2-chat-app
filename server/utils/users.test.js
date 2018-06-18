const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Sinchai',
      room: 'Voxel'
    }, {
      id: '2',
      name: 'Darryl',
      room: 'USC'
    }, {
      id: '3',
      name: 'Niharika',
      room: 'Voxel'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Kevin',
      room: 'Astros fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    // expect(users.users).toEqual({user});
    expect([user]).toEqual(expect.arrayContaining(users.users));
  });

  it('should return names for Voxel', () => {
    var userList = users.getUserList('Voxel');
    expect(userList).toEqual(expect.arrayContaining(['Sinchai', 'Niharika']));
  });

  it('should return names for USC', () => {
    var userList = users.getUserList('USC');
    expect(userList).toEqual(expect.arrayContaining(['Darryl']));
  });

  it('should remove a user', () => {
    var deletedUser = users.removeUser('3');
    expect(users).not.toContain(deletedUser);
  });

  it('should not remove a user', () => {
    var deletedUser = users.removeUser('123456');
    expect(deletedUser).toBeFalsy();
  });

  it('should find a user', () => {
    var user = users.getUser('1');
    expect(user.name).toMatch('Sinchai');
  });

  it('should not find a user', () => {
    var user = users.getUser('123456');
    expect(user).toBeFalsy();
  });

});
