describe('A spec', function () {
  console.log(`outer describe() begin`);
  let foo;

  beforeEach(function () {
    console.log(`outer beforeEach()`);
    foo = 0;
    foo += 1;
  });

  afterEach(function () {
    console.log(`outer afterEach()`);
    foo = 0;
  });

  it('is just a function, so it can contain any code', function () {
    console.log(`outer it() 1`);
    expect(foo).toEqual(1);
  });

  it('can have more than one expectation', function () {
    console.log(`outer it() 2`);
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe('nested inside a second describe', function () {
    console.log(`inner describe() begin`);
    let bar;

    beforeEach(function () {
      console.log(`inner beforeEach()`);
      bar = 1;
    });

    afterEach(function () {
        console.log(`inner afterEach()`);
        bar = 0;
      });

    it('can reference both scopes as needed', function () {
      console.log(`inner it()`);
      expect(foo).toEqual(bar);
    });

    console.log(`inner describe() end`);
  });

  console.log(`outer describe() end`);
});


describe("A spy, when created manually", function() {
    let whatAmI;

    beforeEach(function() {
        whatAmI = jasmine.createSpy('whatAmI');

        whatAmI("I", "am", "a", "spy");
    });

    it("tracks that the spy was called", function() {
        expect(whatAmI).toHaveBeenCalled();
    });
});
