import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import logo from "./logo.svg";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  Card,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);



// const App = ({ signOut }) => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     fetchNotes();
//   }, []);

// // PREMADE FUNCTIONS FROM LAB DEMO

//   async function fetchNotes() {
//     const apiData = await API.graphql({ query: listNotes });
//     const notesFromAPI = apiData.data.listNotes.items;
//     await Promise.all(
//       notesFromAPI.map(async (note) => {
//         if (note.image) {
//           const url = await Storage.get(note.name);
//           note.image = url;
//         }
//         return note;
//       })
//     );
//     setNotes(notesFromAPI);
//   }

//   async function createNote(event) {
//     event.preventDefault();
//     const form = new FormData(event.target);
//     const image = form.get("image");
//     const data = {
//       name: form.get("name"),
//       description: form.get("description"),
//       image: image.name,
//     };
//     if (!!data.image) await Storage.put(data.name, image);
//     await API.graphql({
//       query: createNoteMutation,
//       variables: { input: data },
//     });
//     fetchNotes();
//     event.target.reset();
//   }
  

//   async function deleteNote({ id, name }) {
    
//     const newNotes = notes.filter((note) => note.id !== id);
//     setNotes(newNotes);
//     await Storage.remove(name);
//     await API.graphql({
//       query: deleteNoteMutation,
//       variables: { input: { id } },
//     });
//   }

// // GFTOE FUNCTIONS

// // setTerritory()
//   async function setTerritory(territoryEvent)
//   //try{
//     territoryEvent.preventDefault();
//     const territoryObj = new FormData(territoryEvent.target);
//     const territory = {
//       name: territoryObj.get('territory'),
//     };

//     console.log('Selected Territory:', territory.name)
//  //}
//   //catch (error){
//     //console.log('Error:', error.message);
// //  }  
  

// // setCompany()
//   async function setCompany()
//    console.log()

// // checkCompanyExists()
//   async function setCompany()
//     console.log()

// // newSpreadsheet()
//   async function newSpreadsheet()
//     console.log()
// // loadSpreadsheet()
//   async function loadSpreadsheet()
//     console.log()
// // updateSpreadsheet()
//   async function updateSpreadsheet()
//     console.log()
// // 



  
//   return (
//     <View className="App">
//       <Heading level={1}>My Notes App</Heading>
//       <View as="form" margin="3rem 0" onSubmit={createNote}>
//         <Flex direction="row" justifyContent="center">
//             <View marginEnd="1rem">
//               <label htmlFor="territorySelect">Select Territory:</label>
//               <select
//                 id="territorySelect"
//                 name="territory"
//                 onChange={(event) => setTerritory(event.target.value)}
//                 value={territory}
//                 required
//               >
//                 <option value="">Select a territory</option> {/* select territories 1 - 9 */}
//                 <option value="MWGF01">MWGF01</option>
//                 <option value="MWGF02">MWGF02</option>
//                 <option value="MWGF03">MWGF03</option>
//                 <option value="MWGF04">MWGF04</option>
//                 <option value="MWGF05">MWGF05</option>
//                 <option value="MWGF06">MWGF06</option>
//                 <option value="MWGF07">MWGF07</option>
//                 <option value="MWGF08">MWGF08</option>
//                 <option value="MWGF09">MWGF09</option>
//               </select>
//             </View>
//           <TextField
//             name="name"
//             placeholder="Note Name"
//             label="Note Name"
//             labelHidden
//             variation="quiet"
//             required
//           />
//           <TextField
//             name="description"
//             placeholder="Note Description"
//             label="Note Description"
//             labelHidden
//             variation="quiet"
//             required
//           />
//           <Button type="submit" variation="primary">
//             Create Note
//           </Button>
//         </Flex>
//         <View
//           name="image"
//           as="input"
//           type="file"
//           style={{ alignSelf: "end" }}
//         />
//       </View>
//       <Heading level={2}>Current Notes</Heading>
//       <View margin="3rem 0">
//       {notes.map((note) => (
//         <Flex
//           key={note.id || note.name}
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Text as="strong" fontWeight={700}>
//             {note.name}
//           </Text>
//           <Text as="span">{note.description}</Text>
//           {note.image && (
//             <Image
//               src={note.image}
//               alt={`visual aid for ${notes.name}`}
//               style={{ width: 400 }}
//             />
//           )}
//           <Button variation="link" onClick={() => deleteNote(note)}>
//             Delete note
//           </Button>
//         </Flex>
//       ))}
//       </View>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
    
//   );
// };

// export default withAuthenticator(App);