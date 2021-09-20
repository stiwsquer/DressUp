import Home from "./Home";
import HomeDescription from "../HomeDescription/HomeDescription";
import HomeGallery from "../HomeGallery/HomeGallery";
import HomeProducts from "../HomeProducts/HomeProducts";

import { HomeIntro } from "../Home/Home.style";
import { BrowserRouter as Router } from "react-router-dom";

it("renders Home component without crashing", () => {
  shallow(<Home />);
});

it("contains HomeIntro component", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<HomeIntro />)).toBe(true);
});

it("contains HomoDescription component", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<HomeDescription />)).toBe(true);
});

it("contains HomeGallery component", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<HomeGallery />)).toBe(true);
});

it("contains HomeProducts component", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<HomeProducts />)).toBe(true);
});

it("Home snapshot - shallow", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});

it("Home snapshot - render", () => {
  const wrapper = render(
    <Router>
      <Home />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("Home snapshot - mount", () => {
  const wrapper = mount(
    <Router>
      <Home />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
