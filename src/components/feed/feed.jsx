import React, { useEffect, useState } from "react";
import CreatePost from "../createpost/create";
import Post from "../post/post";
import './feed.css'
import Card from 'react-bootstrap/Card';


const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://blog-server.karthikeyan-mehalingam.workers.dev/api/posts"
      );
      // const postsResp = await resp.json().length?resp.json():[];
      const postsResp = await resp.json();

      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div className="feed">
      <div className="inputWrapper">
        <CreatePost />
      </div>
      <div className="feedWrapper">
        <h3>Feed</h3>
        {posts.length?posts.map((p) => (
          
          <Post key={p.id} id={`${p.username}_${p.id}`} />
        )):<div className="post">
        <div className="postWrapper">
            <Card style={{ width: '100%' }}>
                <Card.Body>
                            <Card.Text>
                            No Post Available
                            </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>}
      </div>
    </div>
  );
};

export default Feed;