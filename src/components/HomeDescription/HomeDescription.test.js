import HomeDescription from "./HomeDescription";
import Button from "../Button/Button";
import { BrowserRouter as Router } from "react-router-dom";

it("renders HomeDescription component without crashing", () => {
  shallow(
    <Router>
      <HomeDescription />
    </Router>
  );
});

it("contains Button component", () => {
  const wrapper = mount(
    <Router>
      <HomeDescription />
    </Router>
  );
  // console.log(wrapper.debug());
  expect(wrapper.contains(<Button>SHOP OUR NEWEST ARRIVALS</Button>)).toBe(
    true
  );
});

it("contains h2 element", () => {
  const wrapper = mount(
    <Router>
      <HomeDescription />
    </Router>
  );
  expect(wrapper.find("h2")).toHaveLength(1);
});

it("contains p element", () => {
  const wrapper = mount(
    <Router>
      <HomeDescription />
    </Router>
  );
  expect(wrapper.find("p")).toHaveLength(1);
});

it("HomeDescription snapshop - shallow", () => {
  const wrapper = shallow(
    <Router>
      <HomeDescription />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("HomeDescription snapshop - render", () => {
  const wrapper = render(
    <Router>
      <HomeDescription />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("HomeDescription snapshop - mount", () => {
  const wrapper = mount(
    <Router>
      <HomeDescription />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
