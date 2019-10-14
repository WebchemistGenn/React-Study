import React from "react";

import { Input, Checkbox, Radio } from "../styles";

const ThemeView = () => {
  return (
    <div>
      {/* <Input /> */}
      <Checkbox label="흐음..." onChange={(event) => console.log(event.target.checked)} />
      <Radio label="라디오1" name="radio" onChange={(event) => console.log(event.target.checked)} />
      <Radio label="라디오2" name="radio" onChange={(event) => console.log(event.target.checked)} />
    </div>
  )
}

export default ThemeView;