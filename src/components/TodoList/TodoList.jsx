import { List, Button, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTodo } from "../../hooks/useTodo";

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
            <Tag color="red">urgently</Tag>
            <Tag color="gold">important</Tag>
            {/* {tags.map((tag) => {
              <Tag key={tag.i} color={tag}>
                {options.value}
              </Tag>;
            })} */}
          </div>
        </List.Item>
      )}
    />
  );
}
