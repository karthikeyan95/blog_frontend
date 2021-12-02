import "./post.css";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
// import { MoreVert } from '@material-ui/icons/MoreVert';

const Post = ({id}) => {
    const PF = process.env.API_URL;
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
        const resp = await fetch(
            `https://blog-server.karthikeyan-mehalingam.workers.dev/api/posts/${id}`
        );
        const postResp = await resp.json();
        setPost(postResp);
        };

        getPost();
    }, [id]);
    return (
        <div className="post">
            <div className="postWrapper">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{post.username}<br/>posted on:{post.date}</Card.Subtitle>
                                <Card.Text>
                                {post.content}
                                </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
            </div>
        </div>
        // <div className="post">
        //     <div className="postWrapper">
        //         <div className="postTop">
        //             <div className="postTopLeft">
        //                 <span className="postUserName">{post.username}</span><br/>
        //                 <span className="postDate">{post.date}</span>
        //             </div>
        //             <div className="postTopRight">
        //                 {/* <MoreVert /> */}
        //             </div>
        //         </div>
        //         <div className="postCenter">
        //             <span className="postText">{post.content}</span>
        //         </div>
        //         <div className="postBottom">
        //             <div className="postBottomLeft">
                        
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Post