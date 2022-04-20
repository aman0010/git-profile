import React, { ReactElement } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Profile from './Profile'
import Repos from './Repos'

export default function Home(): ReactElement {
    return (
        <Container className='mt-5'>
            <Row>
                <Col md={3}>
                    <Profile />
                </Col>
                <Col md={9}>
                    <Repos />
                </Col>
            </Row>
        </Container>
    )
}
