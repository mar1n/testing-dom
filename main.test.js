const fs = require("fs");
const initialHtml = fs.readFileSync("./index.html");
const { screen, getByText, fireEvent } = require("@testing-library/dom");

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
    const emailField = screen.getByPlaceholderText("email");

    fireEvent.input(emailField, {
      target: {value: "szym0nd4widowicz@gmail.com"},
      bubbles: true
    });

    const emialError = document.getElementById("error-email");
    expect(getByText(emialError, "szym0nd4widowicz@gmail.com is valid format."));
  });
  test("unvalid email format", () => {
    const emailField = screen.getByPlaceholderText("email");

    fireEvent.input(emailField, {
      target: { value: "szym0nd4widowiczgmail.com"},
      bubbles: true
    });

    const emialError = document.getElementById("error-email");
    expect(getByText(emialError, "Email is invalid!"));
  });
  test("submit button is disabled", () => {
    const emailField = screen.getByPlaceholderText("email");
    const passwordField = screen.getByPlaceholderText("password");
    const button = document.getElementById("submit-button");

    fireEvent.input(emailField, {
      target: { value: "szym0nd4widowicz@gmail.com"},
      bubbles: true
    });
    fireEvent.input(passwordField, {
      target: { value: "12345"},
      bubbles: true
    });

    expect(button).toHaveProperty('disabled', false);
  });
});

