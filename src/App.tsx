import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <>
      <div className="space-block">
        <h2>Button list</h2>
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
      </div>

      <div className="space-block">
        <h2>Input Fields</h2>
        <div className="input-group">
          <Input
            label="Name"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />

          <Input
            label="Error Field"
            type="textarea"
            id="error-display"
            error="Required Fields"
          />
        </div>
      </div>
    </>
  );
}

export default App;
