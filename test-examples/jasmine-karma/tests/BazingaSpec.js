describe("Generic tests for 'bazingaApp' library. 'bazingaApp'", function() {
    it("should be defined on window load", function() {
        expect(bazingaApp).toBeDefined();
    });

    it("should be and object", function() {
        expect(typeof bazingaApp).toBe('object');
    });
});