import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Kavya Sri</h1>
        <h2>Frontend Developer</h2>
        <p>Welcome to my Portfolio Website</p>

        <hr />

        <h3>About Me</h3>
        <p>
          I am a Frontend Developer passionate about building responsive
          websites using HTML, CSS, JavaScript and React.
        </p>

        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git & GitHub</li>
        </ul>

        <h3>Projects</h3>
        <ul>
          <li>Portfolio Website</li>
          <li>Calculator App</li>
          <li>To-Do List</li>
        </ul>

        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default App;