const userRegister = require("./userController");

describe("user register", () => {
    test("valid arguments", () => {
        const value = userRegister("Szymon", "12345");
        expect(value).toBe(true);
    });
});