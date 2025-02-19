import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi, expect, afterEach } from "vitest";
import { CancelButtonModal } from "./CancelButtonModal";
import "@testing-library/jest-dom/vitest"

describe("CancelButtonModal", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders the cancel button correctly", () => {
    render(<CancelButtonModal handleClose={() => {}} />);
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });

  it("calls handleClose when clicked", () => {
    const handleClose = vi.fn();
    render(<CancelButtonModal handleClose={handleClose} />);
    const button = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(button);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
