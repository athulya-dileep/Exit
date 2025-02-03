import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <Grid container spacing={3} style={{ padding: 20 }}>
      {blogs.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post._id}>
          <Card>
            <CardMedia component="img" height="250" image={post.img_url} alt={post.title} />
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2">{post.content}</Typography>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: 10 }}
              >
                DELETE
              </Button>
              <Button variant="contained" color="secondary">
                UPDATE
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
