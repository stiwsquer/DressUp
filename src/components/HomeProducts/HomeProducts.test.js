import HomeProducts from "./HomeProducts";
import { ProductsSection, ProductsTitle } from "./HomeProducts.style";

let shallowWrapper;
let mountWrapper;
let renderWrapper;
beforeAll(() => {
  shallowWrapper = shallow(<HomeProducts />);
  mountWrapper = mount(<HomeProducts />);
  renderWrapper = render(<HomeProducts />);
});

it("renders HomeProducts component without crashing", () => {
  shallow(<HomeProducts />);
});

it("contains two .horizontal-line classes", () => {
  expect(shallowWrapper.find(".horizontal-line")).toHaveLength(2);
});

it("contains ProductSection component", () => {
  expect(shallowWrapper.find(ProductsSection)).toHaveLength(1);
});

it("contains ProductsTitle component", () => {
  expect(shallowWrapper.find(ProductsTitle)).toHaveLength(1);
});

it("contains h2", () => {
  expect(shallowWrapper.find("h2")).toHaveLength(1);
});
