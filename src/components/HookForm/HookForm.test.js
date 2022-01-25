import { fireEvent, render } from "@testing-library/react";
import HooksForm from ".";

describe('<HookForm />', () => {
  test('Inputing test updates the state', () => {
    const { getByText, getByLabelText } = render(<HooksForm />)
    expect( getByText(/change/i).textContent ).toBe("Change: ")

    fireEvent.change( getByLabelText("Input Text:"), {
        target: {
            value: 'Text'
        }
    } )

    expect( getByText(/change/i).textContent ).not.toBe("Change: ")

    });
    test('submiting a form works correctly', () => {
        const { getByTestId, getByText } = render(<HooksForm />);

        expect(getByText(/Submit Value/i).textContent).toBe("Submit Value: ")
        // text1 es el id de input
        fireEvent.submit(getByTestId("form"), {target: {text1: {value: 'Text' } } })

        expect(getByText(/Submit Value/i).textContent).not.toBe("Submit Value: ")
    })
  
});
