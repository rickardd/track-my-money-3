import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LineGraph from "./LineGraph";

describe("<LineGraph />", () => {
  test("it should mount", () => {
    const data = [
      {
        Name: "2022-Dec",
        Value: 6.2,
      },
      {
        Name: "2022-Oct",
        Value: 10,
      },
      {
        Name: "2022-Sep",
        Value: 3.1,
      },
      {
        Name: "2022-May",
        Value: 160.7,
      },
      {
        Name: "2022-Jan",
        Value: 31.65,
      },
    ];

    render(<LineGraph data={data} />);

    const lineGraph = screen.getByTestId("LineGraph");

    expect(lineGraph).toBeInTheDocument();
  });
});
