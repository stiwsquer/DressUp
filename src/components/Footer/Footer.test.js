import Footer from "./Footer";
import NavItem from "../NavItem/NavItem";
import { MemoryRouter } from "react-router";
import { render } from "enzyme";

it("renders Footer component without crashing", () => {
  shallow(<Footer />);
});

it("renders four <NavItem /> components", () => {
  const wrapper = shallow(<Footer linkTo="#" />);
  expect(wrapper.find(NavItem)).toHaveLength(4);
});

it("contains footer element", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Footer linkTo="#" />
    </MemoryRouter>
  );
  expect(wrapper.find("footer")).toHaveLength(1);
});

it("contains footer element", () => {
  const wrapper = shallow(<Footer linkTo="#" />);
  expect(wrapper.find("li")).toHaveLength(3);
});

it("Footer snapshot - shallow", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
