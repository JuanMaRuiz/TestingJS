jasmine.getFixtures().fixturesPath = "/test-examples/jasmine-standalone/fixtures/"
describe("jqLite generic Tests", function () {
  it("jqLite should be defined in window object", function () {
    expect(window.jqLite).toBeDefined();
  });
  describe("jqLite methods", function () {
    it('jqLite.qsa should return and array', function () {
      loadFixtures('fragment.html');
      expect(jqLite.qsa('.foo')).toExist();
    });
  });
});
