class Developers { // eslint-disable-line no-unused-vars
  /**
   * Default constructor which creates and array of developers
   * @param {Object} data
   */
  constructor(data) {
    this.listOfDevelopers = [];
    this.setDeveloper(data);
  }

  /**
   * Adds a developer to the list of developers
   * @param {Object} data
   */
  setDeveloper(data) {
    for (const developer of data) {
      this.listOfDevelopers.push(new Developer(developer));
    }
  }

  /**
   * Returns a developer
   * @param {int} id
   * @return {Object} Developer object
   */
  getDeveloper(id) {
    const developer = this.listOfDevelopers.filter((dev) => dev.id == id);
    return developer[0];
  }
}


