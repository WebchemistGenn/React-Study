# React

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea8f0201-40a0-494c-b8e1-f463ec401209/deploy-status)](https://app.netlify.com/sites/webchemist-react-study/deploys)

### 1일차 (2019년 09월 23일)

> 이번주 주요 내용:
>
> 1. jQuery와는 다르게 생각해야합니다. ( state 중심 )
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
