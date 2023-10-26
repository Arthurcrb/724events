import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
    it("a list of fields card is displayed", async () => {
        render(<Home />);
        await screen.findByText("Email");
        await screen.findByText("Nom");
        await screen.findByText("Prénom");
        await screen.findByText("Personel / Entreprise");
    });

    describe("and a click is triggered on the submit button", () => {
        it("the success message is displayed", async () => {
            render(<Home />);
            fireEvent(
                await screen.findByText("Envoyer"),
                new MouseEvent("click", {
                    cancelable: true,
                    bubbles: true,
                })
            );
            await screen.findByText("En cours");
            await screen.findByText("Message envoyé !");
        });
    });
});

describe("When a page is created", () => {
    it("displays a list of events", async () => {
        render(<Home />);
        const eventList = screen.getByTestId("eventsTest");
        expect(eventList).toBeInTheDocument();
    });
    it("a list a people is displayed", async () => {
        render(<Home />);
        const peopleCard = screen.getByTestId("PeoplesContainerTitleTest");
        expect(peopleCard).toBeInTheDocument();
        screen.findByText("Notre équipe");
    });
    it("a footer is displayed", async () => {
        render(<Home />);
        screen.getByText("Notre dernière prestation");
        screen.getByText("Contactez-nous");
    });
});