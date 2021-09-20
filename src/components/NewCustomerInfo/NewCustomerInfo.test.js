import { mount } from "enzyme";
import { spy } from "sinon";
import NewCustomerInfo from "./NewCustomerInfo";
import { NewCustomerInfoOuter } from "./NewCustomerInfo.style";

let onButtonClick;
let shallowWrapper;
let mountWrapper;
let renderWrapper;
beforeAll(() => {
  onButtonClick = spy();
  shallowWrapper = shallow(<NewCustomerInfo />);
  mountWrapper = mount(<NewCustomerInfo />);
  renderWrapper = render(<NewCustomerInfo />);
});
it("renders NewCustomerInfo component without crashing", () => {
  shallow(<NewCustomerInfo />);
});

it("contains one h3", () => {
  expect(shallowWrapper.find("h3")).toHaveLength(1);
});

it("contains one p", () => {
  expect(shallowWrapper.find("p")).toHaveLength(1);
});

it("contains NewCustomerInfoOuter component", () => {
  expect(shallowWrapper.find(NewCustomerInfoOuter)).toHaveLength(1);
});
