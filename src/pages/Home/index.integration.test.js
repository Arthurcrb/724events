
// import { fireEvent, render, screen } from "@testing-library/react";
// import Home from "./index";

// describe("Integration Tests for Home Page", () => {
//     it("should render the Home page correctly", () => {
//         render(<Home />);

//         // Assertions for the Home page
//         expect(screen.getAllByText("Nos services")).toBeInTheDocument();
//         expect(screen.getAllByText("Nos réalisations")).toBeInTheDocument();
//         expect(screen.getAllByText("Notre équipe")).toBeInTheDocument();
//         expect(screen.getAllByText("Contact")).toBeInTheDocument();
//     });

//     it("should simulate form submission and display success message", async () => {
//         render(<Home />);

//         // Simulate form submission
//         fireEvent.click(screen.getByText("Envoyer"));

//         // Check if the "En cours" message is displayed
//         expect(await screen.findByText("En cours")).toBeInTheDocument();

//         // Check if the "Message envoyé !" success message is displayed
//         expect(await screen.findByText("Message envoyé !")).toBeInTheDocument();
//     });

//     it("should verify the footer", () => {
//         render(<Home />);

//         // Check if footer elements are displayed
//         expect(
//             screen.getByText("Notre dernière prestation")
//         ).toBeInTheDocument();
//         expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
//     });
// });


