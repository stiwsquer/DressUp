import { BrowserRouter as Router } from "react-router-dom";
import Button from "./Button";

it("renders Button component without crashing", () => {
  shallow(<Button />);
});

it("simulates click events", () => {
  const onButtonClick = sinon.spy();
  const buttonWrapper = mount(
    <Button type="submit" className="submitButton" onClick={onButtonClick} />
  );
  buttonWrapper.find("button").simulate("click");
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
  const tree = shallow(
    <Button type="submit" className="submitButton" onClick={() => {}} />
  );
  expect(tree).toMatchSnapshot();
});

it("Button snapshot - render", () => {
  const tree = render(
    <Button type="submit" className="submitButton" onClick={() => {}} />
  );
  expect(tree).toMatchSnapshot();
});

it("Button snapshot - mount", () => {
  const tree = mount(
    <Button type="submit" className="submitButton" onClick={() => {}} />
  );
  expect(tree).toMatchSnapshot();
});
