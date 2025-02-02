import React from "react";
import { Toolbar, Typography, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";

const blogPosts = [
  {
    id: 1,
    title: "Travel the world!!!!!",
    category: "Travel",
    image: "https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.jpg?s=612x612&w=0&k=20&c=_bb2PdPJMtY9KmNNBSFY6w_TOcC98we45LvsYoa48p8=",
  },
  {
    id: 2,
    title: "Art!!!!!!!!!!!!!",
    category: "Art",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85DLe82Kt2SKZp5JH4KiGYjrOWzbkKV5ZQA&s",
  },
  {
    id: 3,
    title: "Food is Art!!!!",
    category: "Food",
    image: "https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop.jpg",
  },
];

const Home = () => {
  return (
    <div>
      
      {/* Blog Cards */}
      <Grid container spacing={3} style={{ padding: 20 }}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia component="img" height="250" image={post.image} alt={post.title} />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  {post.category}
                </Typography>
                <Typography variant="h6">{post.title}</Typography>
                <Button variant="contained" color="secondary" style={{ marginRight: 10 }}>
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
    </div>
  );
};

export default Home;
