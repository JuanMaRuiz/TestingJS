
class Developer { // eslint-disable-line no-unused-vars
  /**
   * DeveloperTemplate constructor
   * @param {String} id
   * @param {String} name
   * @param {String} title
   * @param {String} bio
   * @param {String} avatar
   * @param {String} web
   * @param {String} twitter
   * @param {String} github
   */
  constructor(id, name, title, bio, avatar, web, twitter, github) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.avatar = avatar;
    this.web = web;
    this.twitter = twitter;
    this.github = github;
  }

  /**
   * Generates the template for a developer with the given data. Please, note that this is not the proper way to do. You should use a template
   * engine to generate the html instead of generater is this way.
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
