import "./SearchBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./SearchBox.css"



export default function InfoBox({info}) {
    const image_url = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_url="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds";
    return (
        <div className="info-box">
            <h3>Weather Information</h3>
            <div className="card-box">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?rain_url:info.Temperature>15?hot_url:cold_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>
                                <p>{info.city}</p>
                                <p>
                                    Temperature=<b>{info.Temperature}&deg;C</b>
                                </p>
                                <p>Humidity=<b>{info.humidity}</b></p>
                                <p>min_temp=<b>{info.MinTemp}</b></p>
                                <p>max_temp=<b>{info.MaxTemp}</b></p>
                                <p>weather=<b>{info.weather}</b></p>
                            </div>
                        </Typography>
                    </CardContent>

                </Card>
            </div>





        </div>
    )
}

