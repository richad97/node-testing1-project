const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { name: "  janee  ", town: "    town" };
    utils.trimProperties(input);
    expect(input).toStrictEqual({ name: "  janee  ", town: "    town" });
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { name: "   jane   ", town: "   town   " };
    utils.trimPropertiesMutation(input);
    expect(input).toStrictEqual({ name: "jane", town: "town" });
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { name: "   jane   ", town: "   town   " };
    utils.trimPropertiesMutation(input);
    expect(input).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const arrayOfObjects = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const arrayOfObjects2 = [{ integer: 13 }, { integer: 3 }, { integer: 21 }];

    const largestInteger = utils.findLargestInteger(arrayOfObjects);
    const largestInteger2 = utils.findLargestInteger(arrayOfObjects2);

    expect(largestInteger).toBe(3);
    expect(largestInteger2).toBe(21);
  });
});

describe("[Exercise 4] Counter", () => {
  let initialArg = 2;
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(initialArg); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    let firstCall = counter.countDown();

    expect(firstCall).toEqual(initialArg);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    let firstCall = counter.countDown();
    let secondCall = counter.countDown();

    expect(secondCall).toEqual(initialArg - 1);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    let firstCall = counter.countDown();
    let secondCall = counter.countDown();
    let thirdCall = counter.countDown();
    let fourthCall = counter.countDown();

    expect(fourthCall).toEqual(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons({
      summer: "summer",
      fall: "fall",
      winter: "winter",
      spring: "spring",
    });
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let firstCall = seasons.next();

    expect(firstCall).toEqual("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let firstCall = seasons.next();
    let secondCall = seasons.next();

    expect(secondCall).toEqual("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let firstCall = seasons.next();
    let secondCall = seasons.next();
    let thirdCall = seasons.next();

    expect(thirdCall).toEqual("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let firstCall = seasons.next();
    let secondCall = seasons.next();
    let thirdCall = seasons.next();
    let fourthCall = seasons.next();

    expect(fourthCall).toEqual("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let firstCall = seasons.next();
    let secondCall = seasons.next();
    let thirdCall = seasons.next();
    let fourthCall = seasons.next();
    let fifthCall = seasons.next();

    expect(fifthCall).toEqual("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }

    expect(seasons.next()).toEqual("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 20); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    expect(focus.drive(100)).toEqual(100);
  });
  test("[16] driving the car uses gas", () => {
    focus.drive(100);
    expect(focus.tank).toEqual(15);
  });
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const even = await utils.isEvenNumberAsync(2);
    expect(even).toBe(true);
  });
  test("[20] resolves false if passed an odd number", async () => {
    const odd = await utils.isEvenNumberAsync(3);
    expect(odd).toBe(false);
  });
});
