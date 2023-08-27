import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import { DetailLayout } from "./DetailLayout";

describe("DetailLayout", () => {
  const defaultProps = {
    backdrop_path: "backdrop_path",
    poster_path: "poster_path",
    overview: "overview",
    title: "title",
    children: <div>children</div>,
  };
  const getComponent = (props = defaultProps) => <DetailLayout {...props} />;
  const setup = (props = defaultProps) => render(getComponent(props));

  it("Should render without crashing", () => {
    const div = document.createElement("div");
    createRoot(div).render(getComponent());
    createRoot(div).unmount();
  });

  it("Should match snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
