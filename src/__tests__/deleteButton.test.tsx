import '@testing-library/jest-dom'
import DeleteButton from "@/app/components/deleteButton/deleteButton";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Delete Button", () => {
    it("should call the onDelete function when clicked", () => {
        const onDelete = jest.fn();
        render(<DeleteButton dragonId={"0"} onDelete={onDelete} />);
        fireEvent.click(screen.getByRole("button"));
        expect(onDelete).toHaveBeenCalled();
    });
});