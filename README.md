# React

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea8f0201-40a0-494c-b8e1-f463ec401209/deploy-status)](https://app.netlify.com/sites/webchemist-react-study/deploys)

### 1일차 (2019년 09월 23일)

> 주요 내용:
>
> 1. jQuery와는 다르게 생각해야합니다. ( `state 중심` )
> 2. Components를 조합하여 페이지를 만든 법에 익숙해져야합니다.
> 3. React는 프레임워크가 아닌 라이브러리입니다, 즉 사용하는 기술들은 사용자에 의해서 변경이 심하기 때문에 나만의 또는 따라해서 나의 것으로 만드는 구성이 필요합니다.

1. jQuery에서 ReactJS, VueJS, AngularJS로..

- Pattern이 도입되면서 Model, View, Control 부분등이 분리, 의존성을 제거하면서 BackboneJS, EmberJS, AngularJS, ReactJS, VueJS등의 프레임워크 또는 라이브러리등이 등장하였습니다. ([Pattern 예제](https://github.com/WebchemistGenn/Pattern))

2. ReactJS는 상태(State)를 관리가 중요합니다.

- State는 불변성(immutability)이 지켜져야합니다. (리액트는 변환시에 이전값과 이후값을 비교하여 변경을 일으킵니다. 이전값의 변경은 정상 작동에 문제가 될 수 있습니다.)

3. CRA (Create-React-App)을 이용한 프로젝트 설치

- 초기부터 Webpack등을 이용하여 리액트 설정을 하시는 분들이 있는데, CRA를 이용하는 것으로도 충분하며, 오히려 React에 맞는 설정이 잘 되어 있습니다.

```bash
# 1. npx는 글로벌 설치를 하지 않아도 설치 할 수 있게 해줍니다.
# 2. project-name은 소문자이어야합니다.

npx create-react-app [project-name]
```

4. Components 생성하기 (프로젝트 참조)
5. Components 조합하기 (프로젝트 참조)
6. styled-components를 이용한 style 적용하기 (프로젝트 참조) - vscode의 경우 확장프로그램 vscode-styled-components를 설치해주셔야 내부 css색상과 자동완성이 됩니다.

```bash
# styled-components 설치

yarn add styled-components
or
npm install styled-components
```

### 2일차 (2019년 09월 30일)

> 주요 내용:
>
> 1. react에서 자주 사용하는 ES6 표현
> 2. 데이터 다루기 ( 6가지 배열 )
> 3. form 데이터 변경법
> 4. 부모와 자식간의 데이터 전달

1. 리액트에서 당연스럽게 쓰이는 ES6 표현입니다.

```javascript
// 자주 사용하는 ES6 표현
import React from "react";
import Input from "./Input";

// 1. Arrow Function
const App = props => {
  const [data] = useState({ haha: { title: "React" } });

  // 3. Object Destructuring
  const {
    haha: { title }
  } = data;

  return (
    <div>
      {/* 2. Template Literals */}
      <h1>{`Welcome ${title}!!!`}</h1>
      {/* 4. Spread Operator */}
      <Input value="test" {...props} />
    </div>
  );
};
```

2. REST API를 통해 받은 데이터리스트를 사용하기 편하게 변경할 수 있는 능력이 높을수록 실무에서의 인정받을 수 있습니다.

```javascript
// 데이터 다루기 ( 백엔드에서 받은 데이터만 잘 가공할 수 있다면 표현 못하는 화면은 없습니다. )
const arr = [0, 1, 2, 3, 4, 5];
// 1. some ( 데이터 중에 조건에 만족하는 값이 존재할때 true, 없으면 false를 반환합니다. )
const some = arr.some(item => item === 5);

// 2. every ( 데이터가 모두 조건에 만족하면 true, 그렇지 않다면 false를 반환합니다. )
const every = arr.every(item => typeof item === "number");

// 3. foreach ( 자주 쓰기때문에 스킵!! )

// 4. map ( 결과 또는 조건에 의해 재배열합니다. )
// - return 하는 값으로 변경하여 반환됩니다.
// - return 하지 못한다면 undefined로 배열에 추가됩니다.
// - React의 배열을 표현할때 주로 쓰입니다.
const map = arr.map(item => item + 2);

// 5. filter ( 조건에 만족한 데이터로 재배열합니다. )
// - 변경된 값이 아닌 내부 item이 반환됩니다.
// - 조건에 만족한 값은 배열에 추가하지 않습니다.
const filter = arr.filter(item => item > 2);

// 6. reduce ( 선언한 초기값에 결과를 누적하여 반환합니다. )
// - 초기값이 존재합니다.
// - 반드시 누적값(acc)을 return 해야합니다.
// - 배열에서 배열이 아닌 다양한 값으로 변경이 가능합니다.
// - reduce를 잘 활용하는 사람이라면 백엔드에서 어떠한 값이 넘어와도 배열을 재정비할 수 있습니다. (중요)
const reduce = arr.reduce((acc, item) => {
  acc += item;
  return acc;
}, 0);
```

3. 리액트에서 form을 구성하는 방법입니다. 주석의 숫자를 따라가며 흐름을 확인해보세요.

```javascript
// form 변경법 ( 리액트에서 거의 외우듯이 사용합니다.  숙지해주세요. )
import React, { useState } from "react";

const Form = () => {
  // 1. 데이터 초기화
  const [form, setForm] = useState({ data1: "", data2: "", data3: "" });

  // 5. 동작을 하면 addEventListener와 같이 event를 사용할 수있습니다.
  const handleChange = event => {
    // 6. 하단 input마다 name과 value가 존재 하기 때문에 event.target에서 name과 value를 꺼내 올 수 있습니다.
    const { name, value } = event.target;

    // 7. 불변의 규칙을 지키면서 새롭게 제작되는 값을 setForm을 이용하여 변경합니다. ( 이때 변경값을 뒤에 배치해야 변경됩니다. )
    setForm(prev => [...prev, [name]: value]);
  }

  // 2. 화면 Render를 통한 화면 구현
  // 3. 3개의 input 중 랜덤으로 내용을 변경
  // 4. 내용이 변경되면 "change" 이벤트가 동작 ( react에서는 onChange )
  // 8. 변경한 내용으로 다시 Render를 하여 화면을 구현합니다.
  return (
    <div>
      <input type="text" name="data1" value={form.data1} onChange={handleChange} />
      <input type="text" name="data2" value={form.data2} onChange={handleChange} />
      <input type="text" name="data3" value={form.data3} onChange={handleChange} />
    </div>
  );
}

```
