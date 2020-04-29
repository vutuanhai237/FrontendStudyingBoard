import React, { Component } from 'react';
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Editor } from '@tinymce/tinymce-react';
import Header from "../container/header"
import Footer from "../container/footer"
import "./create_post.scss"
class CreatePost extends Component {
    handleEditorChange = (e) => {
        console.log(
            'Content was updated:',
            e.target.getContent()
        );
    }
    render() {
        return (
            <div id="create_post">
                <Header />
                <Form>
                <Form.Control md={4} id="tieu_de" type="text" placeholder="Nhập tiêu đề" />

                    <Editor

                        initialValue="<p>Hãy viết gì đó</p>"
                        init={{
                            height: 500,
                            menubar: 'file edit view insert format tools table help',
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste imagetools wordcount"
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help'
                        }}
                        onChange={this.handleEditorChange}
                    />
                    <Form.Control type="text" placeholder="Nhập tag" />
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>


                <Footer />

            </div>

        );
    }
}


export default CreatePost;
