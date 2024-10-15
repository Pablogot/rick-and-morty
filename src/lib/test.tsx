import { getStatusColor, getUserInfo } from "./utils";

describe("getUserInfo", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("returns null when no user info is stored", () => {
    const result = getUserInfo();
    expect(result).toBeNull();
  });

  it("returns parsed user info when it exists in localStorage", () => {
    const mockUserInfo = { userName: "testuser", email: "test@example.com" };
    localStorage.setItem("userInfo", JSON.stringify(mockUserInfo));

    const result = getUserInfo();
    expect(result).toEqual(mockUserInfo);
  });

  it("handles invalid JSON in localStorage", () => {
    localStorage.setItem("userInfo", "invalid JSON");

    const result = getUserInfo();
    expect(result).toBeNull();
  });
});

describe("getStatusColor", () => {
  it("returns \"green\" for \"Alive\" status", () => {
    expect(getStatusColor("Alive")).toBe("green");
  });

  it("returns \"red\" for \"Dead\" status", () => {
    expect(getStatusColor("Dead")).toBe("red");
  });

  it("returns \"grey\" for any other status", () => {
    expect(getStatusColor("unknown")).toBe("grey");
    expect(getStatusColor("")).toBe("grey");
    expect(getStatusColor("Any other status")).toBe("grey");
  });
});
