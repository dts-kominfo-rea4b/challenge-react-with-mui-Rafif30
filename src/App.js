import { Grid, List } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);

  const addContactHandler = (newContact) => {
    setContacts([...contacts, newContact])
    console.log(contacts)
  }
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <ContactForm addContact={addContactHandler} />
          </Grid>
          <Grid item xs={6}>
            <List sx={{ width: "100%", maxWidth: 600, bgcolor: "#bbdefb" }}>
              {contacts.map((contact, index) => (
                <Contact key={index} data={contact} />
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
