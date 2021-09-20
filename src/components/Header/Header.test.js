import { shallow } from "enzyme";
import Navigation from "../Navigation/NavigationV2";
import Header from "./Header";
import { Sections } from "./Header.style";

let shallowWrapper;

beforeAll(() => {
  shallowWrapper = shallow(<Header />);
});

it("renders Header component without crashing", () => {
  shallow(<Header />);
});

it("contains Navigation component", () => {
  expect(shallowWrapper.contains(<Navigation />)).toBe(true);
});

it("contains Sections component", () => {
  expect(shallowWrapper.contains(<Sections />)).toBe(true);
});
