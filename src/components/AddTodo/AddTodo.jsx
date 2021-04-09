import React, { useRef } from "react";
import { Form, Input, Button, Space, Select, Tag } from "antd";
import { useTodo } from "../../hooks/useTodo";

export default function AddTodo() {
  let initalValues = { todoTitle: "", todoText: "" };
  const formRef = useRef(null);

  const { todos, todosAction, options } = useTodo();
  // const options = [
  //   { value: "urgently" },
  //   { value: "not urgently" },
  //   { value: "important" },
  //   { value: "not important" },
  // ];

  function saveTodo(values) {
    todosAction({ type: "add", payload: values });
    formRef.current.resetFields();
  }

  return (
    <Form
      ref={formRef}
      name="addTodo"
      onFinish={saveTodo}
      initialValues={initalValues}
    >
      <Form.Item
        name="todoTitle"
        rules={[
          { required: true, max: 30, message: "Your value isn't valid!" },
        ]}
      >
        <Input.TextArea
          showCount
          maxLength={30}
          placeholder="Todo title"
          autoSize={{ minRows: 1, maxRows: 1 }}
        />
      </Form.Item>
      <Form.Item
        name="todoText"
        rules={[
          { required: true, max: 100, message: "Your value isn't valid!" },
        ]}
      >
        <Input.TextArea
          showCount
          maxLength={100}
          placeholder="Todo text"
          autoSize={{ minRows: 4, maxRows: 6 }}
        />
      </Form.Item>
      <Form.Item>
        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          defaultValue={["urgently", "important"]}
          style={{ width: "100%" }}
          options={options}
        />
      </Form.Item>
      <Form.Item>
        <Space size={645}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <p>ToDos count: {todos.length}</p>
        </Space>
      </Form.Item>
    </Form>
  );
}

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color={
        value === "urgently"
          ? "red"
          : value === "not urgently"
          ? "cyan"
          : value === "important"
          ? "gold"
          : value === "not important"
          ? "green"
          : ""
      }
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}
