import HomeGallery from "./HomeGallery";
import { BrowserRouter as Router } from "react-router-dom";

it("renders HomeGallery component without crashing", () => {
  shallow(
    <Router>
      <HomeGallery />
    </Router>
  );
});

it("contains two Button components", () => {
  const wrapper = mount(
    <Router>
      <HomeGallery />
    </Router>
  );
  expect(wrapper.find("button")).toHaveLength(2);
});

it("contains paragraph", () => {
  const wrapper = mount(
    <Router>
      <HomeGallery />
    </Router>
  );
  expect(
    wrapper.contains(
      <p>
        We just dropped new fall shoe styles, and they are all ON SALE! Shop new
        combat boots, booties, mules, sneakers & more!
      </p>
    )
  ).toBe(true);
});

it("HomeGallery snapshop - shallow", () => {
  const wrapper = shallow(
    <Router>
      <HomeGallery />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("HomeGallery snapshop - render", () => {
  const wrapper = render(
    <Router>
      <HomeGallery />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});

it("HomeGallery snapshop - mount", () => {
  const wrapper = mount(
    <Router>
      <HomeGallery />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
