import { Col, Row } from "react-bootstrap";
import './Main.css';
import StatusBar from "../StatusBar/StatusBar";
import Post from "../Post/Post";
import InfoSection from "../InfoSection/InfoSection";
import Suggestion from "../Suggestion/Suggestion";

export default function Main() {
    return <>
        <Row>
            <Col xs={2}>
            
            </Col>
            <Col xs={6} style={{paddingTop: '30px'}}>                    
                    <div className="main" style={{width: '100%'}}>
                        <StatusBar />  
                        <Post />     
                        <Post />     
                        <Post />     
                        <Post />                  
                    </div>
            </Col>
            <Col xs={2} style={{paddingTop: '30px'}}>
                <InfoSection />
                <Suggestion />
            </Col>
            <Col xs={2}></Col>
        </Row>
    </>  
}