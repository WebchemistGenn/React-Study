import React, { useState } from "react";
import uuid from "uuid/v4";
import moment from "moment";
import styled from "styled-components";

import Item from "../components/todo/Item";

const TodoView = () => {
  const [now, setNow] = useState(moment());
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = event => {
    // submit의 경우 페이지 변경이슈가 있어서 화면이 반짝거리면서 새로고침됩니다.  그것을 방지하기 위한 preventDefault,  자주 잊어먹고 오류를 못잡는 것중에 하나입니다. (중요)
    event.preventDefault();
    if (todo) {
      setList(prev => [
        {
          id: uuid(),
          content: todo,
          done: false,
          date: moment(now)
        },
        ...prev
      ]);
      setTodo("");
    }
  };

  const handleCheck = id => {
    setList(prev => {
      prev.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      });
      return [...prev];
    });
  };

  const handleRemove = id => {
    setList(prev => [...prev.filter(item => item.id !== id)]);
  };

  // 날짜를 구현하기 위한 배열
  const days = [-2, -1, 0, 1, 2];

  return (
    <>
      <Title>날짜별 TodoList 관리</Title>
      <Wrap>
        <Header onSubmit={handleSubmit}>
          {/* 할일을 입력할 수 있습니다. */}
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={event => setTodo(event.target.value)}
            placeholder="할일을 입력해주세요."
          />
        </Header>
        <Calender>
          {days.map(d => {
            // moment를 이용하여 선택된 날짜 (now)에서 -2 ~ 2일이 추가된 값으로 변경합니다.
            const day = moment(now).add(d, "days");
            return (
              <div key={d} className={d === 0 ? "active" : ""} onClick={() => setNow(day)}>
                <div className="week">{day.format("ddd").toUpperCase()}</div>
                <div className="day">{day.format("D")}</div>
                {d === 0 && <div className="month">{day.format("MMM").toUpperCase()}</div>}
              </div>
            );
          })}
        </Calender>
        <List>
          {list
            .filter(item => item.date.diff(now, "days") === 0)
            .sort((a, b) => b.done - a.done)
            .map(item => (
              <Item
                key={item.id}
                data={item}
                onCheck={() => handleCheck(item.id)}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
        </List>
      </Wrap>
    </>
  );
};

export default TodoView;

const Title = styled.div`
  padding: 20px 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const Header = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  z-index: 10;

  input {
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    background-color: #1c2328;
    color: #e7d45d;
    outline: 0;
    font-size: 20px;

    &::placeholder {
      color: #3f4550;
    }
  }
`;

const Wrap = styled.div`
  width: 414px;
  height: 736px;
  margin: 0 auto;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  background-color: #3f4550;
  color: #fff;
`;

const Calender = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
  padding: 0 15px;
  justify-content: space-between;
  background-color: #1b2329;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  z-index: 10;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    cursor: pointer;

    div.week {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
    }

    div.day {
      display: flex;
      justify-content: center;
      flex: 1;
      width: 100%;
      padding-top: 10px;
      font-size: 45px;
      font-weight: bold;
    }

    div.month {
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 9px;
      font-weight: bold;
    }

    &.active {
      background-color: #5c6877;
      height: 110px;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    }

    &:not(.active) {
      background-color: #1b2329;

      div {
        color: #3d4550;
      }
    }

    &:first-of-type,
    &:last-of-type {
      background-color: #39404b;
    }
  }
`;

const List = styled.div`
  overflow-y: scroll;
  height: 586px;
  background-color: #e7d45d;
`;
