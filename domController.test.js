const fs = require("fs");
const initialHtml = fs.readFileSync("index.html");

beforeEach(() => {
    document.body.innerHTML = initialHtml;
});

describe("form", () => {
    test("form exist in dom structure", () => {
        const form = document.getElementById("input-container");
        expect(form.tagName).toBe("FORM");
    });
});

describe("input", () => {
    test("input exist in dom structure", () => {
        const inputList = document.getElementById("input-container");
        expect(inputList.childNodes).toHaveLength(3);

        const nodesName = Array.from(inputList.childNodes).map(
            node => ({ element: node.nodeName, type: node.type})
        );

        expect(nodesName[0].element).toBe("INPUT");
        expect(nodesName[1].element).toBe("INPUT");

        expect(nodesName[0].type).toBe("email");
        expect(nodesName[1].type).toBe("password");
    });
});


describe("button", () => {
    test("button exist in dom structure", () => {
        const button = document.getElementById("submit-button");

        expect(button.tagName).toBe("BUTTON");
    });
});