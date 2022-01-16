import {ReactElement, useState} from "react";
import {Button, Form} from "react-bootstrap";

export default function Login(): ReactElement{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const performValidation = () => {
        return username.length > 0 && password.length > 0;
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
    }
    return (
        <div className="Login">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
