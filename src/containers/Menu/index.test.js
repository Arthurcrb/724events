import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";


describe("When Menu is created", () => {
    it("a list of mandatories links and the logo are displayed", async () => {
        render(<Menu />);
        await screen.findByText("Nos services");
        await screen.findByText("Nos réalisations");
        await screen.findByText("Notre équipe");
        await screen.findByText("Contact");
    });


    describe("and a click is triggered on contact button", () => {
        it("document location href changes", async () => {
            render(<Menu />);
            fireEvent(
                await screen.findByText("Contact"),
                new MouseEvent("click", {
                    cancelable: true,
                    bubbles: true,
                })
            );
            expect(window.document.location.hash).toEqual("#contact");
        });
    });


    describe("and a logo is created", () => {
        it("aria-label is defined on logo", () => {
            render(<Menu />);
            const logo = screen.getByLabelText("Logo");
            expect(logo).toBeInTheDocument();
        });
    });
});
