import { Form, Input, Button } from "antd";
import { useTodo } from "../../hooks/useTodo";
import React, { useRef } from "react";

export default function AddTodo() {
  let initalValues = { todoTitle: "", todoText: "" };
  const formRef = useRef(null);
  const { todosAction } = useTodo();

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
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
