const { userRegister, state } = require("./userController");

beforeEach(() => state.users = {});

describe("user register", () => {
    test("valid arguments", () => {
        const value = userRegister("Szymon", "12345");
        expect(value).toBe(true);
    });
    test("state updated", () => {
        userRegister("Szymon", "12345");
        expect(state.users.userName).toBe("Szymon");
        expect(state.users.password).toBe("12345");
    })
});