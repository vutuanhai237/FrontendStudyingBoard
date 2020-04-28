import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
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
            <div>
                <Header />
                <Form>
                    <Editor
                        apiKey="pgsfnb617zvx79gf1fo6sauiik6bg2icroka7q4f1lelxesr"
                        initialValue="<p>Initial content</p>"
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
