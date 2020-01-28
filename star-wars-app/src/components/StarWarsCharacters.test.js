import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";
import { render, fireEvent, wait } from '@testing-library/react';
import { getData } from "../api";

jest.mock("../api");

test('renders a list of characters with the option of viewing previous list or next list',  async () => {


mockGetData.mockResolvedValue({
    next: "Next",
    previous: "Previous",
    results: [
        {name: "initial name",
        url: "initial url"}
    ]
});

const { getByText } = render(<StarWarsCharacters />);

const PrevButton = getByText(/previous/i);
const NextButton = getbyText(/next/i);


fireEvent.click(PrevButton);
fireEvent.click(NextButton);

expect().toHaveBeenCalledTimes();

wait(() => expect(getByText(/next/i)));
wait(() => expect(getByText(/previous/i)));
});