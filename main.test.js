const fs = require("fs");
const initialHtml = fs.readFileSync("./index.html");
const { screen, getByText } = require("@testing-library/dom");

beforeEach(() => {
  document.body.innerHTML = initialHtml;

  jest.resetModules();
  require("./main");
});

test("adding items through the form", () => {
    screen.getByPlaceholderText("email").value = "Szymon";
    screen.getByPlaceholderText("password").value = "12345";

    const event = new Event("submit");
    const form = document.getElementById("input-container");

    form.dispatchEvent(event);
    
    const userMsg = document.getElementById("user-name-complete");
    expect(getByText(userMsg, "Szymon created account")).toBeInTheDocument();
});

describe("validation of inputs", () => {
  test("valid email format", () => {
    screen.getByPlaceholderText("email").value = "szym0nd4widowicz@gmail.com";

    const event = new Event("input");
    const inputEmail = document.getElementById("email");

    inputEmail.dispatchEvent(event);

    const emialError = document.getElementById("error-email");
    expect(getByText(emialError, "szym0nd4widowicz@gmail.com is valid format."));
  });
});
