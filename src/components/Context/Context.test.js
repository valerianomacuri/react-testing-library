import { act, render, fireEvent, cleanup } from "@testing-library/react";
import App from "../../App.js";
import TestHookContext from "../TestHookContext/index.jsx";
import Context from "./index.jsx";

// función de limpieza despues de cada test
afterEach(cleanup);

it("Context value is updated by child component", () => {
  const { container, getByText } = render(
    <App>
      <Context.Provider>
        <TestHookContext />
      </Context.Provider>
    </App>
  );

  // con el método getByText seleccionamos el elemento que
  // coincida con la expresión regular y obtenemos su texto
  expect(getByText(/Some/i).textContent).toBe("Some Text");

  // hacemos click en el elemento con el texto "Change Text"
  fireEvent.click(getByText("Change Text"));

  // esperamos que el contenido del texto haya cambiado
  expect(getByText(/Some/i).textContent).toBe("Some Other Text");
});
