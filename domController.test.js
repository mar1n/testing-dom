const fs = require("fs");
const initialHtml = fs.readFileSync("index.html");

beforeEach(() => {
    document.body.innerHTML = initialHtml;
})

describe("input", () => {
    test("input exist in dom structure", () => {
        const inputList = document.getElementById("input-container");
        expect(inputList.childNodes).toHaveLength(2);
    })
});