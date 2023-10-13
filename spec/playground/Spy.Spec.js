describe('A spy', function () {
  let foo;
  let bar = null;

  beforeEach(function () {
    foo = {
      setBar: function (value) {
        bar = value;
      },
    };

    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it('tracks that the spy was called', function () {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it('tracks that the spy was called x times', function () {
    expect(foo.setBar).toHaveBeenCalledTimes(2);
  });

  it('tracks all the arguments of its calls', function () {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it('stops all execution on a function', function () {
    expect(bar).toBeNull();
  });

  it('tracks if it was called at all', function () {
    foo.setBar();

    expect(foo.setBar.calls.any()).toEqual(true);
  });
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


describe("Multiple spies, when created manually", function() {
    let tape;

    beforeEach(function() {
        tape = jasmine.createSpyObj(
            'tape',
            ['play', 'pause', 'stop', 'rewind']
        );

        tape.play();
        tape.pause();
        tape.rewind(0);
    });

    it("creates spies for each requested function", function() {
        expect(tape.play).toBeDefined();
        expect(tape.pause).toBeDefined();
        expect(tape.stop).toBeDefined();
        expect(tape.rewind).toBeDefined();
    });

    it("tracks spies called with argument", function() {
         expect(tape.rewind).toHaveBeenCalledOnceWith(0);
    });
});


describe("jasmine.anything", function() {
  it("matches anything", function() {
      expect(1).toEqual(jasmine.anything());
  });

  describe("when used with a spy", function() {
      it("is useful when the argument can be ignored", function() {
          const foo = jasmine.createSpy('foo');
          foo(12, function() {
              return false;
          });

          expect(foo).toHaveBeenCalledWith(12, jasmine.anything());
      });
  });
});

