import * as matchers from "jest-extended";
expect.extend(matchers);

it("That's a test!", function () {
    expect(1 + 1).toEqual(2);
});