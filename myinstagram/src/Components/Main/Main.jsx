import { Col, Row } from "react-bootstrap";
import './Main.css';
import StatusBar from "../StatusBar/StatusBar";
import Post from "../Post/Post";

export default function Main() {
    return <>
        <Row>
            <Col xs={2}>
            
            </Col>
            <Col xs={6}>                    
                    <div className="main" style={{width: '100%'}}>
                        <StatusBar />  
                        <Post />     
                        <Post />     
                        <Post />     
                        <Post />                  
                    </div>
            </Col>
            <Col xs={2}></Col>
            <Col xs={2}></Col>
        </Row>
    </>  
}