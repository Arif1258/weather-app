import WeatherApp from "./WeatherApp.jsx";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh", // full page height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #584158ff 0%, #7894a6ff 100%)", // gradient bg
        padding: "20px",
      }}
    >
      <WeatherApp />
      
    </div>
  );
}

export default App;
