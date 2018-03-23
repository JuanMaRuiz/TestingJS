// Define generic path for fixtures
jasmine.getFixtures().fixturesPath = "/test-examples/jasmine-standalone/fixtures/"

describe("jqLite generic Tests", function () {
  it("jqLite should be defined in window object", function () {
    expect(window.jqLite).toBeDefined();
  });

  describe("jqLite.qs() method", function () {
    it('should find an element in the DOM', function () {
      loadFixtures('fragment.html');
      expect(jqLite.qs('.bazinga')).toExist();
    });
  });
});
