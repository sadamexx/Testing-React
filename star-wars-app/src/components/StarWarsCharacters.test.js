import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData} from "../api";
import { act } from "react-dom/test-utils";

jest.mock("../api");

// mockGetData.mockResolvedValue({
//     next: "Next",
//     previous: "Previous",
//     results: [
//         {name: "initial name",
//         url: "initial url"}
//     ]
// });

// test('renders a list of characters with the option of viewing previous list or next list',  async () => {

// await wait(() => expect(getByText(/next/i)));
// await wait(() => expect(getByText(/previous/i)));
// });

test('render character list and cycle through the page', async () => {
    mockGetData.mockResolvedValueOnce({
        id:1,
        next: 'https://swapi.co/api/people/?page=2',
        results: [{
            name: 'Luke Skywalker',
            url: 'test'
        }]
    })
    const { getByText } = render(<StarWarsCharacters />);
    const PrevButton = getByText(/previous/i);
    const NextButton = getByText(/next/i);

    
    fireEvent.click(PrevButton);
    fireEvent.click(NextButton);

    expect(mockGetData).toHaveBeenCalledTimes(1)
    await wait(() => expect(getByText(/Luke/i)))

})

