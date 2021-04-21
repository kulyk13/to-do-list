import React, { useState } from "react";
import { List, Button, Tag, Modal } from "antd";
import AddTodo from "../AddTodo/AddTodo";
import "./TodoList.css";
import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import { useTodo } from "../../hooks/useTodo";

export default function TodoList() {
  const { todos, todosAction, todoTags } = useTodo();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    todosAction({ type: "edit" });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
              onClick={() => todosAction({ type: "done", payload: todo.id })}
              icon={<CheckOutlined />}
            />,
            <Button
              type="primary"
              shape="circle"
              onClick={showModal}
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
          <div className="wrap">
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
            <List.Item.Meta
              className="done"
              title={todo.title}
              description={todo.text}
            />
          </div>
          <Modal
            title="Edit ToDo"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <AddTodo edit={true} />
          </Modal>
        </List.Item>
      )}
    />
  );
}
