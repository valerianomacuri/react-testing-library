import {act, render, fireEvent, cleanup} from '@testing-library/react';
import App from '../../App.js';
import TestHookContext from '../TestHookContext/index.jsx';
import Context from './index.jsx';

afterEach(cleanup)

it('Context value is updated by child component', () => {

   const { container, getByText } = render(<App>
                                            <Context.Provider>
                                             <TestHookContext />
                                            </Context.Provider>
                                           </App>);

   expect(getByText(/Some/i).textContent).toBe("Some Text")

   fireEvent.click(getByText("Change Text"))

   expect(getByText(/Some/i).textContent).toBe("Some Other Text")
})