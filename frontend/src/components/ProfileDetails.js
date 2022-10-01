// Profile Details Component
// Component will contain an form that will be populated with
// account details of the user
// Will have options to enable the user to:
// Edit and Delete their account

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { IconContext } from "react-icons";
import { FaTrash, FaPen, FaSave, FaHome, FaMobile, FaWindowClose } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ButtonGroup } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";


const ProfileDetails = () => {
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
  const [ userMetadata, setUserMetadata ] = useState(null);
  const [ editMode, setEditMode ] = useState(false);

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ residentialAddress, setResidentialAddress ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_BACKEND_API_URL;
      const audience = process.env.REACT_APP_AUTH0_API;

      try {
        const accessToken = '';
        // const accessToken = await getAccessTokenSilently({
        //   audience: audience
        // });
  
        console.log(user);

        const profileURL = `${domain}/api/profile/${user.email}`;
  
        const profileResponse = await fetch(profileURL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const user_metadata = await profileResponse.json();
        console.log(user_metadata);
        const { firstName, lastName, residentialAddress, phoneNumber } = user_metadata;
        setFirstName(firstName);
        setLastName(lastName);
        setResidentialAddress(residentialAddress);
        setPhoneNumber(phoneNumber);
  
        //setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const domain = process.env.REACT_APP_BACKEND_API_URL;
    const audience = process.env.REACT_APP_AUTH0_API;

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

      const rep = await profileResponse.json();
      // Set editMode to false
      setEditMode(false)


    } catch (e) {
      console.log(e.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const domain = process.env.REACT_APP_BACKEND_API_URL;
    const audience = process.env.REACT_APP_AUTH0_API;

    try {
      const profileURL = `${domain}/api/profile/${user.email}`;
      const accessToken = '';
      // const accessToken = await getAccessTokenSilently({
      //   audience: audience
      // });

      const profileResponse = await fetch(profileURL, {
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
      <div style={{ color:"white"}}>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        <div>
          <ButtonGroup>
            <Button variant="primary" type="submit" onClick={() => setEditMode(!editMode)}>Edit Details <IconContext.Provider value={{ color: "gray", size: "32px", className: "me-1" }}><FaPen/></IconContext.Provider></Button>
            <Button variant="danger" type="submit" onClick={handleShow}>Delete Account<IconContext.Provider value={{ color: "gray", size: "32px", className: "me-1" }}><FaTrash/></IconContext.Provider></Button>
          </ButtonGroup>

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
            <Button variant="primary" type="submit" onClick={handleClose}>Close<IconContext.Provider value={{ color: "gray", size: "32px", className: "me-1" }}><FaWindowClose/></IconContext.Provider></Button>
              <Button variant="danger" type="submit" onClick={handleDelete}>Delete Account<IconContext.Provider value={{ color: "gray", size: "32px", className: "me-1" }}><FaTrash/></IconContext.Provider></Button>
            </Modal.Footer>
          </Modal>          
                  
          <Form onSubmit={handleSubmit}>
            <h2>Account Details for: {user.name}</h2>
            <Row className="me-1">
              <Form.Group as={Col}  controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="First Name" disabled={!editMode} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Last Name" disabled={!editMode} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </Form.Group>
            </Row>

            <Form.Group className="me-1" controlId="formBasicName">
              <Form.Label>Residential Address<IconContext.Provider value={{ color: "gray", size: "32px", className: "me-1" }}><FaHome /></IconContext.Provider></Form.Label>
              <Form.Control type="name" placeholder="Residential Address" disabled={!editMode} value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)}/>
            </Form.Group>          

            <Form.Group className="me-1" controlId="formBasicName">
              <Form.Label>Phone Number<IconContext.Provider value={{ color: "gray", size: "32px", className: "me-1" }}><FaMobile /></IconContext.Provider></Form.Label>
              <Form.Control type="phone number" placeholder="Phone Number" disabled={!editMode} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </Form.Group>                  
            <Button variant="primary" type="submit" onClick={() => setEditMode(false)}>Save Details<IconContext.Provider value={{ color: "gray", size: "32px", className: "me-1" }}><FaSave/></IconContext.Provider></Button>
          </Form>          
        </div>
      </div>
    )
  );
};

export default ProfileDetails;




