import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "./App";

describe("App", () => {
    it("Renders without crashing", () => {
        const app = shallow(<App />);
        expect(app.find(".homepage-header").text()).toEqual("NumScore");
    });
});