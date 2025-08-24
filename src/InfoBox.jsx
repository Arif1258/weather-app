import "./SearchBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import OpacityIcon from "@mui/icons-material/Opacity";

export default function InfoBox({ info }) {
  const hot_url =
    "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2940&auto=format&fit=crop";
  const cold_url =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=3174&auto=format&fit=crop";
  const rain_url =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=2592&auto=format&fit=crop";

  const weatherImage =
    info.humidity > 80 ? rain_url : info.Temperature > 15 ? hot_url : cold_url;

  return (
    <div className="info-box">
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "2rem" }}>
        🌎 Weather Information
      </h2>

      <div className="card-box" style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            maxWidth: 900,
            display: "flex",
            flexDirection: "row",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          {/* Left Side Image */}
          <CardMedia
            component="img"
            sx={{ width: 350, objectFit: "cover" }}
            image={weatherImage}
            alt="Weather image"
          />

          {/* Right Side Content */}
          <CardContent
            sx={{
              flex: "1 1 auto",
              background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
              p: 4,
            }}
          >
            <Typography gutterBottom variant="h3" component="div" color="primary" textAlign="center">
              {info.city}
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <Typography variant="h6">
                  🌡 Temperature: <b>{info.Temperature}&deg;C</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <OpacityIcon sx={{ color: "blue", verticalAlign: "middle" }} /> Humidity:{" "}
                  <b>{info.humidity}%</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <AcUnitIcon sx={{ color: "skyblue", verticalAlign: "middle" }} /> Min Temp:{" "}
                  <b>{info.MinTemp}&deg;C</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <WbSunnyIcon sx={{ color: "orange", verticalAlign: "middle" }} /> Max Temp:{" "}
                  <b>{info.MaxTemp}&deg;C</b>
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign="center" sx={{ mt: 2 }}>
                <Typography variant="h6">
                  {info.humidity > 80 ? (
                    <ThunderstormIcon sx={{ color: "gray", verticalAlign: "middle" }} />
                  ) : info.Temperature > 15 ? (
                    <WbSunnyIcon sx={{ color: "gold", verticalAlign: "middle" }} />
                  ) : (
                    <AcUnitIcon sx={{ color: "lightblue", verticalAlign: "middle" }} />
                  )}{" "}
                  Weather: <b>{info.weather}</b>
                  
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
      </div>
      <footer
        style={{
          textAlign: "center",
          marginTop: "2rem",
          padding: "1rem",
          color: "white",
          background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
          borderRadius: "15px 15px 0 0",
        }}
      >
        <p>🌐 Developed by Sk Arif Ahmed | © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
