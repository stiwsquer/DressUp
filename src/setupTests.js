import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "enzyme-adapter-react-17-updated";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

//Set the default serializer for Jest to be the from enzyme-to-json
//This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

//React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

//Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;

import "@testing-library/jest-dom";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// configure({ adapter: new Adapter() });
