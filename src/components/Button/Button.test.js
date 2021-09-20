import { BrowserRouter as Router } from "react-router-dom";
import Button from "./Button";

let onButtonClick;
let shallowWrapper;
let mountWrapper;
let renderWrapper;
beforeAll(() => {
  onButtonClick = sinon.spy();
  shallowWrapper = shallow(
    <Button type="submit" className="submitButton" onClick={() => {}} />
  );
  mountWrapper = mount(
    <Button type="submit" className="submitButton" onClick={onButtonClick} />
  );
  renderWrapper = render(
    <Button type="submit" className="submitButton" onClick={() => {}} />
  );
});

it("renders Button component without crashing", () => {
  shallow(<Button />);
});

it("simulates click events", () => {
  mountWrapper.find("button").simulate("click");
  // expect(onButtonClick).toHaveProperty("callCount", 1);
  expect(onButtonClick.calledOnce).toBe(true);
});

it("renders children when passed in", () => {
  const wrapper = shallow(
    <Button>
      <div className="unique" />
    </Button>
  );
  expect(wrapper.contains(<div className="unique" />)).toEqual(true);
});

it("Button snapshot - shallow", () => {
  expect(shallowWrapper).toMatchSnapshot();
});

it("Button snapshot - render", () => {
  expect(renderWrapper).toMatchSnapshot();
});

it("Button snapshot - mount", () => {
  expect(mountWrapper).toMatchSnapshot();
});
