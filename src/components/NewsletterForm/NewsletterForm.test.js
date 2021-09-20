import NewsletterForm from "./NewsletterForm";
import { NewsLetterFormWrapper } from "./NewsletterForm.style";

let shallowWrapper;
let mountWrapper;
let renderWrapper;
beforeAll(() => {
  shallowWrapper = shallow(<NewsletterForm />);
  mountWrapper = mount(<NewsletterForm />);
  renderWrapper = render(<NewsletterForm />);
});
it("renders NewsletterForm component without crashing", () => {
  shallow(<NewsletterForm />);
});

it("contains one h4", () => {
  expect(shallowWrapper.find("h4")).toHaveLength(1);
});

it("contains one p", () => {
  expect(shallowWrapper.find("p")).toHaveLength(1);
});

it("contains NewsLetterFormWrapper component", () => {
  expect(shallowWrapper.find(NewsLetterFormWrapper)).toHaveLength(1);
});
