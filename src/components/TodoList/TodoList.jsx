import { List, Button, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTodo } from "../../hooks/useTodo";

export default function TodoList({}) {
  const { todos, todosAction, options } = useTodo();

  function deleteTodo() {
    todosAction({ type: "delete" });
  }

  return (
    <List
      className="list"
      itemLayout="horizontal"
      dataSource={todos}
      // id={}
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
          <div>
            {options.map((tag) => {
              return (
                <Tag
                  key={tag.i}
                  color={
                    tag.value === "urgently"
                      ? "red"
                      : tag.value === "not urgently"
                      ? "cyan"
                      : tag.value === "important"
                      ? "gold"
                      : tag.value === "not important"
                      ? "green"
                      : ""
                  }
                >
                  {tag.value}
                </Tag>
              );
            })}
          </div>
        </List.Item>
      )}
    />
  );
}
