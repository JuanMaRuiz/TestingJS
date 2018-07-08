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
   * Adds a developer object to the array list of developers (listOfDevelopers)
   * @param {Object} data
   */
  setDeveloper(data) {
    for (const developer of data) {
      this.listOfDevelopers.push(new Developer(developer));
    }
  }

  /**
   * Given a developer id returns an object containing the data of the developer.
   * @param {int} id of the developer
   * @return {Object} Developer data object
   */
  getDeveloper(id) {
    const developer = this.listOfDevelopers.filter((dev) => dev.id == id)[0];
    return developer;
  }
}


