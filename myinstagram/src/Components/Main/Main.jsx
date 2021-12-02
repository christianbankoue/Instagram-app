import { Col, Row } from "react-bootstrap";
import './Main.css';
import StatusBar from "../StatusBar/StatusBar";
import Posts from "../Posts/Posts";

export default function Main() {
    return <>
        <Row>
            <Col xs={2}>
            
            </Col>
            <Col xs={6}>                    
                    <div className="main" style={{width: '100%'}}>
                        <StatusBar />  
                        <Posts />                  
                    </div>
            </Col>
            <Col xs={2}></Col>
            <Col xs={2}></Col>
        </Row>
    </>  
}