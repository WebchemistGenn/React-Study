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

### 3일차 (2019년 10월 07일)

> 주요 내용:
>
> 1. routing ( use React Route Dom v4 )
> 2. useEffect ( 중요 )
> 3. useRef, useCallback, useMemo
> 4. useContext, useReducer
> 5. SEO를 해결하기 위한 SSR의 문제점과 다른 방안

1. 리액트에서 Routing은 기존 우리가 알고 있는 Routing과는 다릅니다. SPA(Single Page Application)으로 하나의 index.html을 보유하고 있고 시스템 적으로 화면을 전환시키는 것입니다. ( 이런점으로 인한 SEO 이슈가 발생 )

```bash
# 설치
yarn add react-router-dom

or

npm install react-router-dom
```

```javascript
// src/App.js
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

<BrowserRouter>
  <InitStyle />
  <Layout>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/todo" component={TodoView} />
      <Route path="/todo/:id" component={TodoView} />
      <Redirect to="/" />
    </Switch>
  </Layout>
</BrowserRouter>;
```

1. 여기서 주의해야 할 점은 BrowserRouter의 경우는 최상위에 존재하여 페이지등을 감싼상태이어야한다는 점
2. 상위의 경로가 하위 경로와 초반 이름이 같을 때 ( 위의 예시에서 path="/"와 path="/todo" ) 완벽히 주소가 같을 때가 선택될 수 있게 "exact"를 명시해줘야합니다.
3. 경로의 경우는 path="/todo/:id" 다음과 같이 id라는 params의 값으로 넘겨서 사용할 수 있습니다.

```javascript
// src/components/common/Header.js
import { Link, NavLink } from "react-router-dom";
<Menu>
  <NavLink exact to="/">
    Home
  </NavLink>
  <NavLink to="/todo">Todo</NavLink>
</Menu>;
```

- react-router-dom을 이용한 페이지 이동은 다음과 같이 "Link"와 "NavLink"를 이용할 수 있습니다.
- 여기서 "Link"와 "NavLink"의 차이점은 "NavLink"의 경우는 해당 경로가 설정된 to와 같다면 자동적으로 class명으로 active가 생성됩니다. ( 설정에 의해 class명 변경가능 )

2. useEffect의 경우는 각각의 Component의 생명주기를 사용할 수 있게 해주며, 프로젝트 최적화에 사용됩니다.

```javascript
import React, { useEffect, useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("render에 의해 무족건 반응");
  });

  useEffect(() => {
    console.log("mounted와 같은 효과로 Component가 처음 시작될때 한번 동작");

    return () => {
      console.log(
        "unmounted와 같은 효과로 Component가 사용되지 않을 때 한번 동작"
      );
    };
  }, []);

  useEffect(() => {
    console.log("watch 기능으로 count의 데이터가 변화할 때만 동작");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>증가</button>
    </div>
  );
};
```

- 다음과 같이 무족건, 한번, 일정한 값에 의해서 중각 작업등을 할 수 있게합니다.

3. useRef, useCallback, useMemo

```javascript
// useRef
import React, { useRef } from "react";

const Component = () => {
  const domRef = useRef(null);
  const valueRef = useRef(0);

  const handleCheck = () => {
    valueRef.current += 1;
    console.log(domRef.current, "domRef에 담긴 DOM을 확인 할 수 있습니다.");
    console.log(
      valueRef.current,
      "valueRef에 담긴 변수값을 확인 할 수 있습니다."
    );
  };

  return (
    <div ref={domRef} onClick={handleCheck}>
      DOM!
    </div>
  );
};
```

- 리액트 함수내부에서 별도의 변수를 생성하고 사용하려하면 정상작동이 되지 않을때가 있습니다. 그때를 위해 변수값을 넣어 놓을 수 있는 useRef를 사용하시면 됩니다.

```javascript
// useCallback, useMemo
import React, { useCallback, useMemo } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  const handleCheck1 = useCallback(() => {
    setCount(count + 1);
    console.log(count);
  }, []);

  const handleCheck2 = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCheck1}>테스트 버튼1</button>
      <button onClick={handleCheck2}>테스트 버튼2</button>
    </div>
  );
};
```

- useCallback과 useMemo의 사용은 거의 같으니 useCallback에 대해서만 설명합니다.
- 다음과 같이 내부 실행 함수를 useCallback으로 감쌀 수 있으며 []의 내부에 변수를 선언 또는 선언하지 않을 수 있습니다.
- 동작은 useEffect와 같이 무족건, 한번, 일정 변수에 의한으로 제한 할 수 있으며, 그 설정에 의해서 내부에 쓰인 count의 값이 다르게 동작합니다. ( 즉 함수의 결과를 변수에 저장하는 것을 상황에 따라 동작하지 않게합니다. )
- 즉, 위를 실행하여 버튼을 눌러보면 "테스트 버튼1"의 여러번 눌러도 1의 값만 나오게 됩니다. ( 내부의 count값이 계속 0이기 때문입니다. handleCheck1 함수가 생성될때 내부의 count가 0이고 그 함수는 업데이트 되지 않았기때문.. )

4. useContext, useReducer

```javascript
// useContext
// src/Root.js ( 설정시 )
import React, { setState } from "react";

export const Context = React.createContext({});

const Root = () => {
  const [state, setState] = useState(0);

  return (
    <Context.Provider value={{ state, setState }}>
      <App />
    </Context.Provider>
  );
};

export default Root;

// src/views/Home.js ( 사용시 )
import React, { useContext } from "react";
import { Context } from "../Root";

const Component = () => {
  const { state, setState } = useContext(Context);
  return <div>{state}</div>;
};
```

- 여기서 중요한것은 `Context`입니다. 생성 후 `최상위에서 <Context.Provider>로 이용`하여 둘주는것
- 또하나는 value 값으로 지정한 것이 `Routing이 되어도 변환되지 않는 위치에서 생성한 state 값`이라는 것입니다.

```javascript
// useReducer
// src/Root.js ( 설정시 )
import React, { useReducer } from "react";

export const Context = React.createContext({});

const init = { count: 0 };
const reducers = (state, action) => {
  switch (action.type) {
    "ADD": return { ...state, count: state.count + 1 };
    "MINUS": return { ...state, count: state.count - 1 };
    default: return state;
  }
}

const Root = () => {
  const [props, dispatch] = useReducer(reducers, init);

  return (
    <Context.Provider value={{ props, dispatch }}>
      <App />
    </Context.Provider>
  );
};

export default Root;

// src/views/Home.js ( 사용시 )
import React, { useContext } from "react";
import { Context } from "../Root";

const Component = () => {
  const { props, dispatch } = useContext(Context);
  return <div>{state}</div>;
};
```

- useContext와 크게 차이가 없지만 사용하는 변수 값이 `useState로 생성한 것이 아닌 초기값과 시행값을 이용`한 것입니다. 규모가 커지는 프로젝트에서는 다음과 같이 초기값과 설정한 type에 의한 계획적인 변경을 이용하시는게 더 좋다고 봅니다.

5. SEO를 해결하기 위한 SSR의 문제점과 다른 방안

- 보통 회사에서 SEO를 해결하기 위해서 NextJS, NuxtJS라는 Server Side Render를 이용하는 경우가 많습니다. 그 이유는 위에 간략하게 설명한것처럼 SPA 방식으로 되어 있기 때문입니다.
- SPA의 동작은 하나의 index.html에 만들어진 DOM을 교체하는 방식으로 실존하는 파일은 1개입니다.
- 현재 구글에서는 검색봇의 개선으로 체크가 가능하나 한국에서 네이버의 경우는 그렇지 않습니다. 즉 네이버에서 사이트 체크시 페이지가 1개만 존재한다고 판단합니다, 그래서 검색시 노출이 잘 안되는 이슈가 발생합니다.
- 하지만 여기서 SSR을 도입하게 되면 생기는 문제점으로는, 서버의 비용이 증대, 개발자의 러닝커브 증대등이 있습니다.
- 해결방안으로는 현재 prerender라는 것이 존재하며, 프로젝트를 빌드하여 생성된 내용을 자체 Crwaling하여 페이지의 존재를 확인하고 그 페이지를 실존하는 것처럼 폴더와 index.html파일들을 생성해줍니다.
