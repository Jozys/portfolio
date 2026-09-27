import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import LanguageProvider from "../../../language/hooks/LanguageProvider";
import ThemeProvider from "../../../theme/hooks";

function renderHeader(props = {}) {
  const defaultProps = {
    currentTab: "home" as const,
    tabs: ["home", "projects", "me"] as const,
  };

  return render(
    <MemoryRouter initialEntries={["/v4/home"]}>
      <LanguageProvider>
        <ThemeProvider>
          <Header {...defaultProps} {...props} />
        </ThemeProvider>
      </LanguageProvider>
    </MemoryRouter>,
  );
}

describe("Header component", () => {
  it("renders Joshua Slaar branding", () => {
    renderHeader();
    expect(screen.getAllByText("JOSHUA SLAAR").length).toBeGreaterThan(0);
  });

  it("renders mobile hamburger button with accessible label and opens drawer", () => {
    const onChange = vi.fn();
    renderHeader({ onChange });

    // Find the hamburger button by aria-label
    const menuButton = screen.getByRole("button", {
      name: /open navigation menu/i,
    });
    expect(menuButton).toBeDefined();
    expect(menuButton.getAttribute("aria-expanded")).toBe("false");

    // Click to open mobile navigation drawer
    fireEvent.click(menuButton);

    expect(menuButton.getAttribute("aria-expanded")).toBe("true");

    // Drawer should render nav links
    const mobileNav = screen.getByRole("navigation", {
      name: /mobile navigation/i,
    });
    expect(mobileNav).toBeDefined();

    // Check for Projects tab button in mobile nav
    const mobileProjectsButton = screen
      .getAllByRole("button", { name: /projects/i })
      .find((el) => mobileNav.contains(el));
    expect(mobileProjectsButton).toBeDefined();

    // Click projects in mobile menu
    if (mobileProjectsButton) {
      fireEvent.click(mobileProjectsButton);
    }
    expect(onChange).toHaveBeenCalledWith("projects");
  });

  it("closes the drawer when close button is clicked", async () => {
    renderHeader();

    const openButton = screen.getByRole("button", {
      name: /open navigation menu/i,
    });
    fireEvent.click(openButton);

    const closeButton = screen.getByRole("button", {
      name: /close navigation menu/i,
    });
    expect(closeButton).toBeDefined();

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /open navigation menu/i }),
      ).toBeDefined();
    });
  });
});
