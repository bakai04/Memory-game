const sortUsers = (users, activeLevel, sortType) => {
    users.sort(function (a, b) {
      if (a.levels[activeLevel][sortType] < b.levels[activeLevel][sortType]) {
        return -1;
      } else if (b.levels[activeLevel][sortType] < a.levels[activeLevel][sortType]) {
        return 1;
      }
      return 0;
    });
    return users;
  };
  export default sortUsers;