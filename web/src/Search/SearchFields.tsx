import React, {ReactElement} from "react";
import {Form} from "react-bootstrap";

export default function SearchFields(): ReactElement{
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Localisation</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form>
        </>
    )
}
