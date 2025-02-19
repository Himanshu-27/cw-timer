import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, afterEach } from "vitest";
import { SubmitModalButton } from "./SubmitModalButton";
import "@testing-library/jest-dom/vitest";

describe("SubmitModalButton", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders the button with given text", () => {
    render(
      <SubmitModalButton text="Submit" isTitleValid={true} isTimeValid={true} />
    );
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("applies correct styles when both title and time are valid", () => {
    render(
      <SubmitModalButton text="Submit" isTitleValid={true} isTimeValid={true} />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-600");
  });

  it("applies correct styles when either title or time is invalid", () => {
    render(
      <SubmitModalButton
        text="Submit"
        isTitleValid={false}
        isTimeValid={true}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-400");
  });

  it("applies correct styles when both title and time are invalid", () => {
    render(
      <SubmitModalButton
        text="Submit"
        isTitleValid={false}
        isTimeValid={false}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-400");
  });

  it("button should be clickable", async () => {
    const user = userEvent.setup();
    render(
      <SubmitModalButton text="Submit" isTitleValid={true} isTimeValid={true} />
    );
    const button = screen.getByRole("button");
    await user.click(button);
    expect(button).toBeEnabled();
  });
});
