describe("jqLite generic Tests", function() {
    it("jqLite should be defined in window object", function() {
        expect(window.jqLite).toBeDefined();
    });
    describe("jqLite methods", function() {
        it('jqLite.qsa should return and array', function() {
          console.log(jqLite.qsa('div'));
          expect(jqLite.qsa('div')).toEqual([]);
        });
    });
});
