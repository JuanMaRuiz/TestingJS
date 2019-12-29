const log = console.log;

suite("Generic Tests for jqLite Library", () => {
    test("should be defined on window load", () => {
        assert.isDefined(window.jqLite, 'jqLite has been defined')
    });

  beforeEach(() => {
    // add an element to the page to render into
    let testElement = $('<section></section>');
    $('body').append(testElement);
  });
  test('jqLite.qsa should return an array', () => {
    expect(jqLite.qsa('section')).to.be.an('array');
    assert.typeOf(jqLite.qsa('section'), "array", "we have an array");
  });

  before(() => {
    // add an element to the page to render into
    let testElement = $('<div class="foo"></div class="foo"><div class="foo"></div class="foo">');
    $('body').append(testElement);
  });
  test('jqLite.qsa should find 2 foo elements in the DOM', () => {
    assert.lengthOf(jqLite.qsa('.foo'), 2, "2 div.foo elements were found in html");
  });
});
