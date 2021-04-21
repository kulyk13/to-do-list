import React, { useRef } from "react";
import { Form, Input, Button, Space, Select, Tag } from "antd";
import { useTodo } from "../../hooks/useTodo";

export default function AddTodo({ add, edit }) {
  const formRef = useRef(null);
  const { todosAction, todoTags } = useTodo();

  if (add) {
    function saveTodo(values) {
      todosAction({ type: "add", payload: values });
      formRef.current.resetFields();
    }

    return (
      <Form
        ref={formRef}
        name="addTodo"
        onFinish={saveTodo}
        initialValues={{ todoTags: [] }}
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
        <Form.Item name="todoTags">
          <Select
            mode="multiple"
            showArrow
            tagRender={(props) => tagRender(props, todoTags)}
            options={todoTags}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  } else if (edit) {
    function saveTodo(values) {
      todosAction({ type: "edit", payload: values });
    }

    return (
      <Form
        ref={formRef}
        name="addTodo"
        onFinish={saveTodo}
        initialValues={{ todoTags: [1, 2] }}
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
        <Form.Item name="todoTags">
          <Select
            mode="multiple"
            showArrow
            tagRender={(props) => tagRender(props, todoTags)}
            options={todoTags}
          />
        </Form.Item>
      </Form>
    );
  }
}

function tagRender({ label, value, closable, onClose }, options) {
  const color = options.find((item) => item.value === value)?.color;
  return (
    <Tag
      color={color}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}
