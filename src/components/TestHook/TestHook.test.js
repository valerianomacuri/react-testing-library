import { cleanup, fireEvent, render } from "@testing-library/react";
import TestHook from ".";
import App from "../../App";

afterEach( cleanup )
describe('<TestHook />', () => {
    test('Text in state is changed when button clicked', () => {
        const { getByText } = render(<TestHook />)
        const element = getByText(/Initial/i)

        expect( element.textContent ).toBe("Initial State")

        fireEvent.click( getByText("State Change Button") )

        expect( element.textContent ).toBe("Initial State Changed")

    });

    // test('button click changes props', () => {
    //     const { getByText } = render(
    //         <App>
    //             <TestHook/>
    //         </App>
    //     )
    //     expect( getByText(/Moe/i).textContent ).toBe("Moe")

    //     fireEvent.click( getByText("Change Name") )
      
    //     expect( getByText(/Steve/i).textContent ).toBe("Steve")
    //   })
    
});
