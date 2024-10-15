import { UserInfoProvider } from "@/app/providers/user-info";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserInfoForm } from "./index";

describe("UserInfoForm", () => {
  it("renders form fields", () => {
    render(
      <UserInfoProvider>
        <UserInfoForm />
      </UserInfoProvider>
    );

    expect(screen.getByLabelText(/userName/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/job title/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });

  it("calls setUserInfo and onSubmit when form is submitted", () => {
    const mockOnSubmit = jest.fn();

    render(
      <UserInfoProvider>
        <UserInfoForm onSubmit={mockOnSubmit} />
      </UserInfoProvider>
    );

    fireEvent.change(screen.getByLabelText(/userName/i), {
      target: { value: "Pepe" },
    });
    fireEvent.change(screen.getByLabelText(/job title/i), {
      target: { value: "Prawn" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
