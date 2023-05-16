import Button from "./components/Button";
import "./App.css";

function App() {
 

  return (
    <>
      <div className="button-group">
        <Button>Default Button</Button>
        <Button variant="primary" type="button">
          Primary Button
        </Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button href="https://example.com" type="button">
          Anchor Link
        </Button>
      </div>
      <div>
        <Button variant="primary" type="button" block>
          Wide
        </Button>
      </div>
    </>
  );
}

export default App;
