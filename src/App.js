import './App.css';
import Editor from './components/Editor';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
      <h1>Tiptap Editor Demo</h1>
      <div className="App" style={{
        height: '100vh',
        border: '4px solid #ccc',
        width: '80%',
      }}>
        <Editor />
      </div>
    </div>
  );
}

export default App;
