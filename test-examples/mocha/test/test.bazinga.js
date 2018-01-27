describe("Generic tests for 'bazingaApp'", function () {
    it("should be defined on window load", function () {
        assert.isDefined(bazingaApp, 'bazingaApp has been defined');
    });

    it("should be and object", function () {
        expect(typeof bazingaApp).to.equal('object');
    });
});