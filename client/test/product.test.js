import {fireEvent, render} from "@testing-library/react";
import Product from "../pages/product";

describe('Product', () => {

    test('should render with initial state for product quantity and basket items', () => {
        const {getByTitle} = render(<Product/>);

        const currentQuantity = getByTitle("Current quantity");
        const basketItems = getByTitle("Basket items");

        expect(currentQuantity).toHaveTextContent("1");
        expect(basketItems).toHaveTextContent("0");
    });

    test("should be able to increase and decrease product quantity", async () => {
        const {getByText, getByTitle} = render(<Product/>);

        const increaseQuantity = getByText("+");

        const currentQuantity = getByTitle("Current quantity");
        expect(currentQuantity).toHaveTextContent("1");

        fireEvent.click(increaseQuantity);
        expect(currentQuantity).toHaveTextContent("2");

        const decreaseQuantity = getByText("-");

        fireEvent.click(decreaseQuantity);
        expect(currentQuantity).toHaveTextContent("1");
    });

    test("should be able to add items to the basket", async () => {
        const {getByText, getByTitle} = render(<Product/>);

        const increaseQuantity = getByText("+");

        const currentQuantity = getByTitle("Current quantity");

        fireEvent.click(increaseQuantity);
        fireEvent.click(increaseQuantity);
        fireEvent.click(increaseQuantity);

        expect(currentQuantity).toHaveTextContent("4");

        const addToBasketElement = getByText("Add to cart");
        fireEvent.click(addToBasketElement);

        const basketItems = getByTitle("Basket items");
        expect(basketItems).toHaveTextContent("4");
    });

    test("should not decrease quantity when quantity is 1 and decrease button is clicked", () => {
        const {getByText, getByTitle} = render(<Product/>);
        const decreaseQuantity = getByText("-");
        const currentQuantity = getByTitle("Current quantity");

        fireEvent.click(decreaseQuantity);

        expect(currentQuantity).toHaveTextContent("1");
    });

    test("should disable the decrease quantity button when quantity is 1", () => {
        const {getByText, getByRole} = render(<Product/>);
        const decreaseQuantityButton = getByRole('button', {name: /-/i});

        fireEvent.click(decreaseQuantityButton);

        expect(decreaseQuantityButton).toBeDisabled();
    });

    test("should not disable the button when quantity is more than 1", () => {
        const {getByText, getByRole} = render(<Product/>);

        const decreaseQuantityButton = getByRole('button', {name: /-/i});
        const increaseQuantity = getByText("+");

        fireEvent.click(increaseQuantity);

        expect(decreaseQuantityButton).not.toBeDisabled();
    });
});