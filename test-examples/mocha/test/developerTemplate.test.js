suite('Developer Template', function() {
  test('render method should return the template passed data', function() {
    const devTemplate = new bazingaApp.DeveloperTemplate();
    const dummyDev = {
      name: "Panceta",
      avatar: "no-image.jpg",
      bio: "Bazinga is the new black",
      web: "http://www.pance.org",
      twitter: "http://twitter.com/pance",
      github: "http://github.com/pance",
    };

    assert.isTrue(devTemplate.render(dummyDev).indexOf('Panceta') !== -1, "[message]");
  });
});
