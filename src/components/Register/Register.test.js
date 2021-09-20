import Input from "../Input/Input";
import Select from "../Select/Select";
import Register from "./Register";
import { RegisterForm, RegisterSection } from "./Register.style";

let shallowWrapper;
let mountWrapper;
let renderWrapper;
beforeAll(() => {
  shallowWrapper = shallow(<Register />);
  mountWrapper = mount(<Register />);
  renderWrapper = render(<Register />);
});

it("renders Register component without crashing", () => {
  shallow(<Register />);
});

it("contains two Select components", () => {
  expect(shallowWrapper.find(Select)).toHaveLength(2);
});

it("contains Input component", () => {
  expect(shallowWrapper.find(Input)).toHaveLength(12);
});

it("contains RegisterSection component", () => {
  expect(shallowWrapper.find(RegisterSection)).toHaveLength(1);
});

it("contains RegisterForm component", () => {
  expect(shallowWrapper.find(RegisterForm)).toHaveLength(1);
});
