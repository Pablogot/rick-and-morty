import { getUserButtonText } from "./util";

describe("getUserButtonText", () => {
  it("returns a formatted string when both userName and jobTitle are provided", () => {
    const result = getUserButtonText({ userName: "John", jobTitle: "Developer" });
    expect(result).toBe("John the Developer");
  });

  it("handles empty strings correctly", () => {
    const result = getUserButtonText({ userName: "", jobTitle: "" });
    expect(result).toBeNull();
  });
});
