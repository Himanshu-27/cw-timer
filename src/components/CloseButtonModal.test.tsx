import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";
import { CloseButtonModal } from "./CloseButtonModal";
import "@testing-library/jest-dom/vitest";

describe("CloseButtonModal", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render the close button", () => {
    render(<CloseButtonModal handleClose={vi.fn()} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call handleClose when clicked", () => {
    const handleClose = vi.fn();
    render(<CloseButtonModal handleClose={handleClose} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should have correct styles", () => {
    render(<CloseButtonModal handleClose={vi.fn()} />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass(
      "p-1",
      "hover:bg-gray-100",
      "rounded-full",
      "transition-colors"
    );
  });
});
