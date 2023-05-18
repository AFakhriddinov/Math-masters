import operate from "../components/logic/operate";

describe("Test four operations +, -, / and x", () => {
  test("Adding numbers", () => {
    expect(operate(4, 3, "+")).toEqual("7");
  });

  test("Subtracting numbers", () => {
    expect(operate(7, 2, "-")).toEqual("5");
  });

  test("Multiplying numbers", () => {
    expect(operate(6, 9, "x")).toEqual("54");
  });

  test("Dividing numbers", () => {
    expect(operate(9, 3, "/")).toEqual("3");
  });

  test("Finding module", () => {
    expect(operate(10, 6, "%")).toEqual("4");
  });

  test("Dividing by 0", () => {
    expect(operate(6, 0, "/")).toEqual("Can't divide by 0.");
  });
});