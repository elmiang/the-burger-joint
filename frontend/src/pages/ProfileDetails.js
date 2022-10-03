// Profile Details Component
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ButtonGroup, Form, Col, Row, Modal } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaTrash, FaPen, FaSave, FaHome, FaMobile, FaWindowClose } from "react-icons/fa";


const ProfileDetails = () => {
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
  const navigate = useNavigate();
  const [ editMode, setEditMode ] = useState(false);

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ residentialAddress, setResidentialAddress ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_BACKEND_API_URL;
      // const audience = process.env.REACT_APP_AUTH0_API;

      try {
        const accessToken = '';
        // const accessToken = await getAccessTokenSilently({
        //   audience: audience
        // });

        const profileURL = `${domain}/api/profile/${user.email}`;
  
        const profileResponse = await fetch(profileURL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const user_metadata = await profileResponse.json();
        const { firstName, lastName, residentialAddress, phoneNumber } = user_metadata;
        setFirstName(firstName);
        setLastName(lastName);
        setResidentialAddress(residentialAddress);
        setPhoneNumber(phoneNumber ?? '');
  
        //setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.email]);

  // useEffect(() => {
  //   const form = document.getElementById("formAccountDetails");    
  //   form?.checkValidity();
  // }, [phoneNumber]);

  const handleSubmit = async (e) => { 
    const form = document.getElementById("formAccountDetails"); 
    if (form.checkValidity() === false) {
      console.log('form is invalid');
      return;
    }

    setValidated(true);
    
    const domain = process.env.REACT_APP_BACKEND_API_URL;
    // const audience = process.env.REACT_APP_AUTH0_API;

    try {
      const profileURL = `${domain}/api/profile/${user.email}`;
      const profileBody = {
        email: user.email,
        firstName: firstName,
        lastName: lastName,
        residentialAddress: residentialAddress,
        phoneNumber: phoneNumber          
      };

      console.log(JSON.stringify(profileBody));

      const accessToken = '';
      // const accessToken = await getAccessTokenSilently({
      //   audience: audience
      // });

      const profileResponse = await fetch(profileURL, {
        method: 'PATCH',
        body: JSON.stringify(profileBody),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
      });

      await profileResponse.json();

      // Set editMode to false
      setEditMode(false);
      
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const domain = process.env.REACT_APP_BACKEND_API_URL;
    // const audience = process.env.REACT_APP_AUTH0_API;

    try {
      const profileURL = `${domain}/api/profile/${user.email}`;
      const accessToken = '';
      // const accessToken = await getAccessTokenSilently({
      //   audience: audience
      // });

      await fetch(profileURL, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Log the user out and navigate to the home page
      logout();
      return navigate("/");

    } catch (e) {
      console.log(e.message);
    }
  };
  
  return (
    isAuthenticated && (
      <div className="container-fluid p-5" style={{ color:"white"}}>  
        <h2 className="text-warning text-center">Account Profile</h2>          
        <div className="mx-auto" style={{ width: "60%" }}>
          <div className="">
            <Button variant="primary" hidden={editMode} onClick={() => setEditMode(!editMode)}>Edit Details <IconContext.Provider value={{ color: "white", size: "28px", className: "ms-1" }}><FaPen/></IconContext.Provider></Button>
            <Button variant="primary" hidden={!editMode} onClick={() => handleSubmit()}>Save Details<IconContext.Provider value={{ color: "white", size: "28px", className: "ms-1" }}><FaSave/></IconContext.Provider></Button>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you would like to delete your account.
              Once it is deleted, it can not be retrieved?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>Close<IconContext.Provider value={{ color: "white", size: "32px", className: "ms-1" }}><FaWindowClose/></IconContext.Provider></Button>
              <Button variant="danger" onClick={handleDelete}>Delete Account<IconContext.Provider value={{ color: "white", size: "32px", className: "ms-1" }}><FaTrash/></IconContext.Provider></Button>
            </Modal.Footer>
          </Modal>          
                  
          <Form id="formAccountDetails" className="mt-2" noValidate validated={validated}>
            <Row className="">
              <Form.Group as={Col} controlId="firstNameControl">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="First Name" required disabled={!editMode} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a First Name.
                </Form.Control.Feedback>                
              </Form.Group>

              <Form.Group as={Col} controlId="lastNameControl">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Last Name" required disabled={!editMode} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a Last Name.
                </Form.Control.Feedback>                      
              </Form.Group>
            </Row>

            <Form.Group className="me-1" controlId="residentialAddressControl">
              <Form.Label>Residential Address<IconContext.Provider value={{ color: "white", size: "32px", className: "ms-1" }}><FaHome /></IconContext.Provider></Form.Label>
              <Form.Control type="name" placeholder="Residential Address" required disabled={!editMode} value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                  Please provide a valid Residential Address.
              </Form.Control.Feedback>                    
            </Form.Group>          

            <Form.Group className="me-1" controlId="phoneNumberControl">
              <Form.Label>Phone Number<IconContext.Provider value={{ color: "white", size: "32px", className: "ms-1" }}><FaMobile /></IconContext.Provider></Form.Label>
              <Form.Control type="phone number" placeholder="Phone Number" required disabled={!editMode} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                  Please provide a valid Phone Number.
              </Form.Control.Feedback>                    
            </Form.Group>   

            <Button className="m-2 float-end" variant="danger" onClick={handleShow}>Delete Account<IconContext.Provider value={{ color: "white", size: "28px", className: "ms-1" }}><FaTrash/></IconContext.Provider></Button>

          </Form>          
        </div>
      </div>
    )
  );
};

export default ProfileDetails;




