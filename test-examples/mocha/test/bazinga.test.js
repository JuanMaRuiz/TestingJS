suite("Generic tests for 'bazingaApp'", function () {
    suite("'BazingaApp", function() {
        test("should be defined on window load", function () {
            assert.isDefined(bazingaApp, 'bazingaApp has been defined');
        });

        test("should be and object", function () {
            assert.isObject(bazingaApp)
        });
    });
});