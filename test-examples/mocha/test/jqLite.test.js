suite("Generic Tests for jqLite Library", function() {
    test("should be defined on window load", function() {
        assert.isDefined(window.jqLite, 'jqLite has been defined')
    });
});