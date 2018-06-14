
class Developer { // eslint-disable-line no-unused-vars
  /**
   * DeveloperTemplate constructor
   * @param {Object} developer - Contains all necessary data about the developer
   */
  constructor(developer) {
    this.id = developer['_id'];
    this.name = developer.name;
    this.title = developer.title;
    this.bio = developer.bio;
    this.avatar = developer.avatar;
    this.web = developer.web;
    this.twitter = developer.twitter;
    this.github = developer.github;
  }

  /**
   * Generates the template for a developer with the given data.
   * @return {String} Contains the html to render
   */
  render() {
    return `<div class="card border-light mb-3">
    <div class="card-header">${this.name}</div>
    <div class="card-body">
    <p class="img"><img id="dev-image" class="img-rounded" src="${this.avatar}" alt="${this.name}" style="height: 200px"></p>
        <p class="card-text">${this.bio}</p>
        <p class="card-text"><span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a href="${this.web}">${this.web}</a></p>
        <p class="card-text"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> <a href="${this.twitter}">${this.twitter}</a></p>
        <p class="card-text"><span class="glyphicon glyphicon-cloud" aria-hidden="true"></span> <a href="${this.github}">${this.github}</a></p>
      <div>
    </div>`;
  }
}
