// // component에 'import React from "react"'는 반드시 필요합니다.
// import React, { useState } from 'react';
// import uuid from "uuid/v4";
// import styled from "styled-components";

// // 외부에서 만든 Component를 다음과 같이 불러올 수 있습니다.
// import Input from "./components/Input";
// import Item from "./components/Item";
// import Button from "./components/Button";

// function App() {
//   // 다음과 같이 state 값을 생성할 수 있고 앞의 title은 변수로, setTitle은 변경함수로 사용합니다.
//   // const [ title, setTitle ] = useState("LOGIN");
//   // const [form, setForm] = useState({ data1: "", data2: "", data3: "" });

//   const [todo, setTodo] = useState("");
//   const [active, setActive] = useState(-1);
//   const [list, setList] = useState([
//     { id: uuid(), title: "축구하기", done: false },
//     { id: uuid(), title: "농구하기", done: false },
//     { id: uuid(), title: "야구하기", done: false },
//     { id: uuid(), title: "개발하기", done: false }
//   ]);

//   // const handleChange = event => {
//   //   const { name, value } = event.target;

//   //   setForm({ ...form, [name]: value });
//   // }
  
//   // title의 값을 변경할 때 반드시 다음과 같이 변경함수를 이용하여야 render가 다시 일어나서 변동값을 적용 시킵니다.
//   // setTitle("ReactJS!!!");

//   const handleChange = event => {
//     setTodo(event.target.value);
//   }

//   const handleAdd = () => {
//     setList([...list, { id: uuid(), title: todo, done: false }]);
//     setTodo("");
//   }

//   return (
//     // 최상위에는 반드시 다음과 같이 div 등으로 감싸야 합니다.
//     <Wrap>
//       {/* <h1>{title}</h1>
//       <Input label="E-Mail" type="text" />
//       <Input label="Password" type="password" />
//       <Button onClick={handleChange}>Click</Button> */}

//       {/* <input type="text" name="data1" value={form.data1} onChange={handleChange} />
//       <input type="text" name="data2" value={form.data2} onChange={handleChange} />
//       <input type="text" name="data3" value={form.data3} onChange={handleChange} />

//       <button onClick={() => console.log(form)}>데이터 저장</button> */}

//       <Input label="할일" type="text" name="todo" value={todo} onChange={handleChange} />
//       <button onClick={handleAdd}>추가</button>
//       {list.map((item, index) => {
//         return <Item key={item.id} active={active === index} data={item} onClick={() => setActive(index)} />
//       })}
//     </Wrap>

//     // 다음과 같이 div로 감싸지 않고 2개의 dom일때는 에러발생
//     // <h1>{title}</h1>
//     // <button onClick={handleChange}>Click</button>
//   );
// }

// export default App;

// const Wrap = styled.div`
//   width: 500px;
//   margin: 30px auto;
//   padding: 20px;
//   border: 1px solid #eee;

//   /* 다음과 같이 scss형식으로 작성이 가능합니다. */
//   h1 {
//     text-align: center;
//   }
// `;