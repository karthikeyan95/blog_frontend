import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import "./create.css"

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', title:'', content:'', show: false};
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    



    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleShow(event) {
        this.setState({show: true});
    }
    
    handleClose(event) {
        this.setState({show: false});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'post',
            // headers: { 
            //     'Accept' : '*/*',
            //     'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        const response = fetch('https://blog-server.karthikeyan-mehalingam.workers.dev/api/post', requestOptions)
            .then(
                window.location.reload()
            )
            .catch(error => {
                console.error('There was an error!', error);
            });
        const data = await response.json();
    }
    render() {
        return (
            <>
                <Form.Control type="text"  placeholder="Post Something New" onClick={this.handleShow} />
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> New Post </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <table border='0' className="NewPost">
                                <tr>
                                    <Form.Control typ="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                                </tr>
                                <tr>
                                    <Form.Control type="text" placeholder="Title" name="title" value= {this.state.title} onChange={this.handleChange}/>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>
                                        <Form.Control as="textarea" name="content" placeholder="Whats on your mind?" value={this.state.content} onChange={this.handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan ='3' align='center'>
                                        <div className="d-grid gap-2">
                                            <Button as="input" type="submit" value="Post" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

}

export default CreatePost;