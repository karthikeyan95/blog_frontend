import Feed from '../feed/feed';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './home.css';


const Home = () => {
    return (
        <>
            <div className="homeContainer">
                    <Navbar bg="dark" fixed="top" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    src="./cloudflare.png"
                                    width="100"
                                    height="40"
                                    className="d-inline-block align-top"
                                    alt="Cloud Flare Social"
                                />{' '}
                                Social Site
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <Feed />
                {/* <div className="feedContainer">
                    
                </div> */}
            </div>
        </>
    );
}

export default Home