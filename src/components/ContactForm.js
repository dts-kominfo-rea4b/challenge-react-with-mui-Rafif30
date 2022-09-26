// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { useRef} from "react";


const ContactForm = ({addContact}) => {
  
  const nameValueRef = useRef()  
  const phoneValueRef = useRef()  
  const emailValueRef = useRef()  
  const photoValueRef = useRef()
  
  const submitHandler = (event) => {
    event.preventDefault()
    const inputValue = {
      name: nameValueRef.current.value,
      phone: phoneValueRef.current.value,
      email: emailValueRef.current.value,
      photo: photoValueRef.current.value
    }
    console.log(inputValue)
    addContact(inputValue)
    
    
  }

  
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <Card sx={{ maxWidth: 600, backgroundColor: "#ffcdd2" }}>
      <form onSubmit={submitHandler}>
      <CardContent>
        
        <TextField
          sx={{ marginBottom: 2, backgroundColor: "#d7ccc8" }}
          required
          fullWidth
          id="outlined-required"
          label="Name"
          inputRef={nameValueRef}
        />
        <TextField
          sx={{ marginBottom: 2, backgroundColor: "#d7ccc8" }}
          required
          fullWidth
          id="outlined-required"
          label="Phone"
          inputRef={phoneValueRef}
        />
        <TextField
          sx={{ marginBottom: 2, backgroundColor: "#d7ccc8" }}
          required
          fullWidth
          id="outlined-required"
          label="Email"
          inputRef={emailValueRef}
        />
        <TextField
          sx={{ marginBottom: 2, backgroundColor: "#d7ccc8" }}
          required
          fullWidth
          id="outlined-required"
          label="Photo URL"
          inputRef={photoValueRef}
        />
      </CardContent>
      <CardActions>
        <Button size="small" variant="text" color="success" type="submit">
          ADD NEW
        </Button>
      </CardActions>
      </form>
    </Card>
  );
};

export default ContactForm;
