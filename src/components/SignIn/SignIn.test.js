import Input from "../Input/Input";
import SignIn from "./SignIn";
import { SignInForm, SignInSection } from "./SignIn.style";
let shallowWrapper;

beforeAll(() => {
  shallowWrapper = shallow(<SignIn />);
});
it("renders SignIn component without crashing", () => {
  shallow(<SignIn />);
});

it("contains two SignInSection component", () => {
  expect(shallowWrapper.find(SignInSection)).toHaveLength(1);
});

it("contains two Input components", () => {
  expect(shallowWrapper.find(Input)).toHaveLength(2);
});

it("contains SignInForm component", () => {
  expect(shallowWrapper.find(SignInForm)).toHaveLength(1);
});
