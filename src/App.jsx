import "./App.css";
import "antd/dist/antd.css";
import { DatePicker, Button, Space, Card} from "antd";

function App() {
  return (
    <div className="app">
      <Space direction="vertical">
        <Space>
          <DatePicker />
          <Button type="primary">Primary button</Button>
        </Space>
        <Card title="Card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </div>
  );
}

export default App;
