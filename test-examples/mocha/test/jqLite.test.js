const log = console.log;
suite("Generic Tests for jqLite Library", function() {
    test("should be defined on window load", function() {
        assert.isDefined(window.jqLite, 'jqLite has been defined')
    });

    test('jqLite.qsa should return an array of elements', function() {
        expect(jqLite.qsa('div')).to.be.an('array');
    });
});