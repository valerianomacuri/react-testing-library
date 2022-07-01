import * as ACTIONS from "../../actions";
import * as Reducer from ".";
import TestHookReducer from "../../components/TestHookReducer";
import { cleanup, fireEvent, render } from "@testing-library/react";

afterEach(cleanup);

describe("test the reducer and actions", () => {
  it("should return the initial state", () => {
    expect(Reducer.initialState).toEqual({ stateprop1: false });
  });

  it("should change stateprop1 from false to true", () => {
    expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS)).toEqual({
      stateprop1: true,
    });
  });
});

it("Reducer changes stateprop1 from false to true", () => {
  const { container, getByText } = render(<TestHookReducer />);

  expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is false");

  fireEvent.click(getByText("Dispatch Success"));

  expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is true");
});

it("Reducer changes stateprop1 from true to false", () => {
  const { container, getByText } = render(<TestHookReducer />);

  fireEvent.click(getByText("Dispatch Success"));

  expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is true");

  fireEvent.click(getByText("Dispatch Failure"));

  expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is false");
});
