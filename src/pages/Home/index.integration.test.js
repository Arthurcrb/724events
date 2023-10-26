import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("Integration Tests for Home Page", () => {
    it("should render the Home page correctly", () => {
        render(<Home />);

        // Assertions for the Home page
        expect(screen.getAllByText("Nos services")).toBeTruthy();
        expect(screen.getAllByText("Nos réalisations")).toBeTruthy();
        expect(screen.getAllByText("Notre équipe")).toBeTruthy();
        expect(screen.getAllByText("Contact")).toBeTruthy();
    });

    it("should simulate form submission and display success message", async () => {
        render(<Home />);

        // Simulate form submission
        fireEvent.click(screen.getByText("Envoyer"));

        // Check if the "En cours" message is displayed
        expect(await screen.findByText("En cours")).toBeTruthy();

        // Check if the "Message envoyé !" success message is displayed
        expect(await screen.findByText("Message envoyé !")).toBeTruthy();
    });

    it("should verify the footer", () => {
        render(<Home />);

        // Check if footer elements are displayed
        expect(screen.getByText("Notre dernière prestation")).toBeTruthy();
        expect(screen.getByText("Contactez-nous")).toBeTruthy();
    });
});


