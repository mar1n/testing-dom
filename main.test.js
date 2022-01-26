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
    console.log('form innerHTML', form.innerHTML);
    form.dispatchEvent(event);
    
    const userMsg = document.getElementById("user-name-complete");
    expect(getByText(userMsg, "Szymon created account")).toBeInTheDocument();
})
