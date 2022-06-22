import { Todos } from "./todos";

import { render, screen } from '@testing-library/react';
import React from "react";
test('loads and displays todos', async () => {
    
    render(<Todos todo={todo} />);
    expect(screen.getByTestId('todos-div')).toHaveTextContent('');
    
});