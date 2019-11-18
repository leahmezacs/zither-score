import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";

describe("App", () => {
    it("Renders without crashing", () => {
        const app = mount(<App />);
        expect(app.find(".homepage-header").text()).toEqual("NumScore");
    });
});