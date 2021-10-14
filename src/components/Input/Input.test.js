import Input from "./Input";

it("renders Input component without crashing", () => {
  shallow(<Input />);
});

it("evoke on change function - sinon", () => {
  const onChangeFunc = sinon.spy();
  const wrapper = mount(<Input onChange={onChangeFunc} />);
  wrapper.find("input").first().simulate("change");
  expect(onChangeFunc.calledOnce).toBe(true);
});

it("evoke on change function - jest.fn", () => {
  const onChangeFunc = jest.fn();
  const wrapper = mount(<Input onChange={onChangeFunc} />);
  wrapper.find("input").first().simulate("change");
  expect(onChangeFunc).toHaveBeenCalledTimes(1);
});

it("render text correctly", () => {
  const wrapper = mount(<Input>Label</Input>);
  const text = wrapper.find("label").text();
  expect(text).toBe("Label");
});

it("Change props values", () => {
  const wrapper = mount(
    <Input
      id="inputId"
      inputType="emial"
      placeholder="enter your email"
      inputValue="example@gmail.com"
      isRequired={true}
      autoFocus={true}
    >
      Label
    </Input>
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({ id: "newInputId", placeholder: "Email" });

  expect(wrapper).toMatchSnapshot();
});
