import { Constants } from "./constant";
const widthDesign = 375;
const heightDesign = 812;
const scale = (size, accordingHeight) => {
  if (accordingHeight) {
    return (size * Constants.height) / heightDesign;
  }
  return (size * Constants.width) / widthDesign;
};

export default scale;