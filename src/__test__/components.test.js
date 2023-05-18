import React from "react";
import { render } from "@testing-library/react";
import Home from "../components/Home";
import Quote from "../components/Quote";

describe("Testing Home, Quote, and Navigation components render correctly", () => {
  it("Rendering Home component", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  
});