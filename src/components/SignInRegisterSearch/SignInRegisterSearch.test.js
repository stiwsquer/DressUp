import NavItem from "../NavItem/NavItem";
import SignInRegisterSearch from "./SignInRegisterSearch";
import { UlContainer } from "./SignInRegisterSearch.style";
let shallowWrapper;
// let mountWrapper;
// let renderWrapper;
beforeAll(() => {
  shallowWrapper = shallow(<SignInRegisterSearch />);
  // mountWrapper = mount(<SignInRegisterSearch />);
  // renderWrapper = render(<SignInRegisterSearch />);
});
it("renders SignInRegisterSearch component without crashing", () => {
  shallow(<SignInRegisterSearch />);
});

it("render component", () => {
  const Wrapper = shallow(<SignInRegisterSearch showMenu />);
  expect(Wrapper).toBeDefined;
});

it("does not render component", () => {
  const Wrapper = shallow(<SignInRegisterSearch showMenu={false} />);
  expect(Wrapper).toBeUndefined;
});

it("contains UlContainer component", () => {
  expect(shallowWrapper.find(UlContainer)).toHaveLength(1);
});

it("contains NavItem component", () => {
  expect(shallowWrapper.find(NavItem)).toHaveLength(3);
});

it("contains five li elements", () => {
  expect(shallowWrapper.find("li")).toHaveLength(5);
});
