import React, { useEffect } from "react";
import { List, Button, Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTodo } from "../../hooks/useTodo";

export default function TodoList() {
  const { todos, todosAction, todoTags } = useTodo();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <List
      className="list"
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <Button
              shape="circle"
              onClick={() => todosAction({ type: "edit", payload: todo.id })}
              icon={<EditOutlined />}
            />,
            <Button
              type="danger"
              shape="circle"
              onClick={() => todosAction({ type: "delete", payload: todo.id })}
              icon={<DeleteOutlined />}
            />,
          ]}
        >
          <List.Item.Meta title={todo.title} description={todo.text} />
          <div>
            {todo.tags.map((tag) => {
              const todoTag = todoTags.find((item) => item.value === tag);
              return (
                <Tag key={tag} color={todoTag.color}>
                  {todoTag.label}
                </Tag>
              );
            })}
          </div>
        </List.Item>
      )}
    />
  );
}
