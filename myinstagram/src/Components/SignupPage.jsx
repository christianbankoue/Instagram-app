import {Card, Col, Form, FormControl, InputGroup, Row, Button, Image} from "react-bootstrap"
import inst_image from '../images/9364675fb26a.svg'
import inst_logo from '../images/logoinsta.png'
import fb from '../images/fb.png'
import playstore from '../images/play.png'
import appstore from '../images/app.png'
import Footer from "./Footer/Footer"

const SignupPage = () => {
    return <>
        <Row>
            <Col className=""></Col>

            <Col className="">
                <div className="container">

                    <Image className="loginpage_component_left loginpage_component" src={inst_image} width="456px" heigth="618px" />

                    <div className="loginpage_component_rigth loginpage_component text-center">
                        <Card className="form_card_signup">
                            <Card.Title>
                                <Image src={inst_logo} width="175px" className="loginpage_logo" />
                            </Card.Title>

                            <div className="loginpage_login">
                                <Form className="">
                                    <h2 style={{ color: "#A3A3A3", fontSize: "17px", margin: "0px 40px 20px", fontWeight: "600" }}>Sign up to see photos and videos from your friends</h2>

                                    <div className="" style={{margin: "0px 40px"}}>
                                        <Button type="submit" className="" style={{ backgroundColor: "#0095F6", border: "0px", width: "100%", color: "#FFF"}}>
                                            <Image src={fb} width="16px" className="login_fb_logo" />
                                            <span className="fb_text fb_text_signuppage">Log in with Facebook</span>
                                        </Button>
                                    </div>

                                    <div className="login_ordiv form_input_group">
                                        <div>
                                            <div className="login_divbar"></div>
                                            <div className="login_or">OR</div>
                                            <div className="login_divbar"></div>
                                        </div>
                                    </div>

                                    <div className="form signup_form">
                                        <InputGroup className="form_input_group  mb-3" >
                                            <FormControl type="text" placeholder="Mobile number or email address" className="form_input form_child" />
                                        </InputGroup>

                                        <InputGroup className="form_input_group  mb-3" >
                                            <FormControl type="text" placeholder="Full Name" className="form_input form_child" />
                                        </InputGroup>

                                        <InputGroup className="form_input_group  mb-3" >
                                            <FormControl type="text" placeholder="Username" className="form_input form_child" />
                                        </InputGroup>

                                        <InputGroup className="form_input_group ">
                                            <FormControl type="password" placeholder="Password" className="form_input form_child" />
                                        </InputGroup>

                                        <div className="form_input_group">
                                            <Button type="submit" className="mt-4 form_child">Log in</Button>
                                        </div>
                                    </div>

                                    
                                    <p className="ZGwn1" style={{ color: "#A3A3A3", fontSize: "12px", margin: "0px 40px" }}>
                                        By signing up, you agree to our <a href="https://help.instagram.com/581066165581870" tabindex="0" target="_blank" style={{textDecoration: "none", color:"#A3A3A3", fontSize: "12px"}}>Terms</a>. 
                                        Learn how we collect, use and share your data in our <a href="https://help.instagram.com/519522125107875" tabindex="0" target="_blank" style={{textDecoration: "none", color:"#A3A3A3", fontSize: "12px"}}>Data Policy</a>, 
                                        and how we use cookies and similar technology in our <a href="/legal/cookies/" tabindex="0" target="_blank" style={{textDecoration: "none", color:"#A3A3A3", fontSize: "12px"}}>Cookie Policy</a>.</p>
                                </Form>
                            </div>

                            <div className="login_fb mt-4">

                            </div>
                        </Card>

                        <Card className="mt-2 inst_login_signup">
                            <p>Have an account? <a href="#" className="inst_login_link">Log in</a></p>
                        </Card>

                        <div className="inst_app">
                            <p>Get the app.</p>
                            <div>
                                <a href="#" className="inst_app_logo">
                                    <Image src={appstore} width="136px" height="40px" className="inst_app_apple" />
                                </a>
                                <a href="#" className="inst_app_logo">
                                    <Image src={playstore} width="136px" height="40px" className="inst_app_google" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </Col >

            <Col className=""></Col>

            <Footer singup={true} />
        </Row>
    </>
}

export default SignupPage