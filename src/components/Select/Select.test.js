import Select from "./Select";
import { SelectWrapper } from "./Select.style";
let opt;
let shallowWrapper;
let mountWrapper;
let renderWrapper;
beforeAll(() => {
  opt = [{ key: "1", value: "2", text: "text" }];
  shallowWrapper = shallow(<Select options={opt} />);
  mountWrapper = mount(<Select options={opt} />);
  renderWrapper = render(<Select options={opt} />);
});

it("renders Select component without crashing", () => {
  shallow(<Select options={opt} />);
});

it("contains two SelectWrapper classes", () => {
  expect(shallowWrapper.find(SelectWrapper)).toHaveLength(1);
});

it("contains select element", () => {
  expect(shallowWrapper.find("select")).toHaveLength(1);
});
