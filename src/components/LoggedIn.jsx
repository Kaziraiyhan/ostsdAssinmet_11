function App() {
  const LoggedIn = true;

  let content;

  if (LoggedIn) {
    content = <p>User is logged in.</p>;
  } else {
    content = <p>User is not logged in.</p>;
  }

  return (
    <div style={{ textAlign: "center",marginTop:'30px' }}>
      <p
        style={{
          background: "#ff5252",
          color: "#333",
          padding: "10px",
          display: "inline-block",
        }}
      >
        Use Short Hand If Else in any JSX.
      </p>
      <h1>Welcome to our website</h1>
      {content}
    </div>
  );
}

export default App;
