function App() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div style={{ textAlign: "center",marginTop:"50px" }}>
          <p
        style={{
          background: "#ff5252",
          color: "#333",
          padding: "10px",
          display: "inline-block",
        }}
      >
        how Loop works in JSX
      </p>
      <h1>List of Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
