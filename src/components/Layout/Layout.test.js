import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";
import Layout from "./Layout";

it("renders Layout component without crashing", () => {
  shallow(<Layout />);
});

it("contains one Switch component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("Switch")).toHaveLength(1);
});

it("contains three Route component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("Route")).toHaveLength(3);
});

it("contains NewsletterForm component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.contains(<NewsletterForm />)).toBe(true);
});

it("contains Footer component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.contains(<Footer />)).toBe(true);
});

it("contains one Header component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.contains(<Header />)).toBe(true);
});

it("contains one SignIn component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.contains(<SignIn />)).toBe(true);
});

it("contains Register component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.contains(<Register />)).toBe(true);
});

it("contains Home component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.contains(<Home />)).toBe(true);
});

it("Layour snapshot - shallow", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper).toMatchSnapshot();
});
