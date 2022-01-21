const fs = require("fs");
document.body.innerHTML = fs.readFileSync("index.html");

describe("input", () => {
    test("input exist in dom structure", () => {
        const inputList = document.getElementById("input-container");
        expect(inputList.children).toHaveLength(2);
    })
});