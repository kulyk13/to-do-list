import { List, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTodo, todosAction } from "../../hooks/useTodo";

export default function TodoList({}) {
  const { todos, todosAction } = useTodo();

  function deleteTodo() {
    todosAction({ type: "delete" });
  }

  return (
    <List
      className="list"
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <Button
              type="danger"
              shape="circle"
              onClick={deleteTodo}
              icon={<DeleteOutlined />}
            />,
          ]}
        >
          <List.Item.Meta title={todo.title} description={todo.text} />
        </List.Item>
      )}
    />
  );
}
