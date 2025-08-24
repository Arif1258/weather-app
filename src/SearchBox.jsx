import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ffe924116e25c0efb4e5eb252e984456";

  const weatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("Network response was not ok");

      let jsonResponse = await response.json();
      let result = {
        city: jsonResponse.name,
        Temperature: jsonResponse.main.temp,
        MinTemp: jsonResponse.main.temp_min,
        MaxTemp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      setError(true);
      console.error(err);
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newinfo = await weatherInfo();
      updateInfo(newinfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      {/* ✅ Navbar Full Width */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #ff6f61, #d84315)", // 🔥 red-orange gradient
          padding: "0.5rem 2rem",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", letterSpacing: 1 }}
          >
            🌍 WeatherApp
          </Typography>
          <div>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>
              <a style={{textDecoration:"none",color:"white"}} href="https://portfolio-arif.onrender.com/">Portfolio: Sk Arif Ahmed</a>
            </Button>
            
          </div>
        </Toolbar>
      </AppBar>

      {/* ✅ Weather Search Box */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 400,
          margin: "3rem auto",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "1rem" }}>
          🌤 Search Weather
        </h2>
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="Enter City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            fullWidth
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "#ffeb3b" },
                "&.Mui-focused fieldset": { borderColor: "#ffeb3b" },
              },
              mb: 2,
            }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              background: "linear-gradient(135deg, #ff9800, #f44336)",
              color: "white",
              fontWeight: "bold",
              borderRadius: "12px",
              py: 1.2,
              "&:hover": {
                background: "linear-gradient(135deg, #f44336, #ff9800)",
              },
            }}
          >
            🔍 Search
          </Button>
          {error && (
            <p style={{ color: "yellow", marginTop: "1rem" }}>
              ⚠️ No such place exists
            </p>
          )}
        </form>
      </Paper>
    </div>
  );
}
