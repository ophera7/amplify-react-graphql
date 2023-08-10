import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";


import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';

import { listAssessmentAccountDetails, listNotes } from "./graphql/queries";


import {
  createAssessmentAccountDetails,
  updateAssessmentAccountDetails,
  deleteAssessmentAccountDetails,
  createDistrict as createDistrictMutation,
  createCustomerSelect as createCustomerSelectMutation,
  createNote as createNoteMutation,
  createTerritorySelect as createTerritorySelectMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

import {
  TerritorySelectCreateForm,
  CustomerSelectCreateForm,
  DistrictCreateForm,
  AssessmentAccountDetailsCreateForm,
  AssessmentAccountDetailsUpdateForm
 } from './ui-components';
import { createContext } from "react";

import { Amplify, API, Storage, graphqlOperation } from 'aws-amplify';
import * as mutations from './graphql/mutations';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// const ListAssessmentAccountDetails = `
//   query {
//       listAssessmentAccountDetails {
//         items {
//           id AccountManagerName AccountName AccountSAName AccountSalesforceLink CustomerSalesConsoleLink ProServTrainingSpentT12M _version
//         }
//       }
//     }
//   `







const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);
  //const [account, setAccount] = useState([]);
  //const [isDistrictFormSubmitted, setIsDistrictFormSubmitted] = useState(false);
  //const [showForm, setShowForm] = useState(true)

  //  

  // const updateAccount = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const result = await API.graphql(graphqlOperation(updateAssessmentAccountDetails, {
  //       input: {
  //         // id: updateFormData.id,
  //         // AccountName: updateFormData.AccountName,
  //         // AccountManagerName: updateFormData.AccountManagerName,
  //         // AccountSAName: updateFormData.AccountSAName,
  //         // AccountSalesforceLink: updateFormData.AccountSalesforceLink,
  //         // CustomerSalesConsoleLink: updateFormData.CustomerSalesConsoleLink,
  //         // ProServTrainingSpentT12M: parseFloat(updateFormData.ProServTrainingSpentT12M),
  //         // _version: parseInt(updateFormData._version)
  //       }
  //     }));
  //     console.log('Account Updated:', result.data.updateAssessmentAccountDetails);
  //   } catch (error) {
  //     console.error('Error Updating Account:', error);
  //   }
  // }

  // const handleUpdateFormChange = (field, value) => {
  //   setUpdateFormData({
  //     ...updateFormData,
  //     [field]: value
  //   });
  // };
  
  // const state = { accounts: []}

  // async function componentDidMount() {
  //   const accountData = await API.graphql(graphqlOperation(ListAssessmentAccountDetails))
  //   this.setState({ accounts: accountData.data.listAssessmentAccountDetails.items})
  // }



  useEffect(() => {
    fetchNotes();
    //fetchAccount();
  }, []);

  async function createAccount(){ 
    const account = {AccountName: "Test", AccountManagerName: "John Doe", AccountSAName: "Albert Opher", AccountSalesforceLink: "www.salesforce.com/test", CustomerSalesConsoleLink: "www.aws.amazon.com/test", ProServTrainingSpentT12M: 50.5, _version: 1}
    try {
      const result = await API.graphql(graphqlOperation(createAssessmentAccountDetails, { input: account }));
      console.log('Account Created:', result.data.createAssessmentAccountDetails);
    } catch (error) {
      console.error('Error Creating Account:', error);
    }
  }

  async function updateAccountDetails(){
    // <View>
    //   <AssessmentAccountDetailsUpdateForm/>
    // </View>
    try {
      const data = {
              // id: prompt("Give an accountID: ") | "28ad903b-c21f-4074-95c9-ae9131d70095",
              // AccountName: prompt("AccountName"),
              // AccountManagerName: prompt("AccountManagerName"),
              // AccountSAName: prompt("AccountSAName"),
              // AccountSalesforceLink: prompt("AccountSalesforceLink"),
              // CustomerSalesConsoleLink: prompt("CustomerSalesConsoleLink"),
              // ProServTrainingSpentT12M: prompt("ProServTrainingSpentT12M"),
              // _version: prompt("_version")
              id: "",
              AccountName: "",
              AccountManagerName: "",
              AccountSAName: "",
              AccountSalesforceLink: "",
              CustomerSalesConsoleLink: "",
              ProServTrainingSpentT12M: 0,
              _version: 0
            };
      const result = await API.graphql(graphqlOperation(updateAssessmentAccountDetails, { input: data }))
      console.log('Account Updated:', result.data.updateAssessmentAccountDetails);
    } catch (error) {
      console.error('Error Updating Account:', error);
    }
  }

  // async function updateAccountDetailsReloaded(event){
  //   try {
  //     //event.preventDefault();
  //     const form = new FormData(event.target);
  //     console.log('Account Updated');
  //     const data = {
  //       id: form.get("id") | "28ad903b-c21f-4074-95c9-ae9131d70095",
  //       AccountName: form.get("AccountName"),
  //       AccountManagerName: form.get("AccountManagerName"),
  //       AccountSAName: form.get("AccountSAName"),
  //       AccountSalesforceLink: form.get("AccountSalesforceLink"),
  //       CustomerSalesConsoleLink: form.get("CustomerSalesConsoleLink"),
  //       ProServTrainingSpentT12M: form.get("ProServTrainingSpentT12M"),
  //       _version: form.get("_version")
  //     };
  //     console.log('Account Updated:');
  //     const result = await API.graphql(graphqlOperation(createAssessmentAccountDetails, {input: data}));
  //     //fetchNotes();
  //     //const result = await API.graphql(graphqlOperation(updateAssessmentAccountDetails, {input: { id: this.id, AccountName: this.AccountName, AccountManagerName: this.AccountManagerName, AccountSAName: this.AccountSAName, AccountSalesforceLink: this.AccountSalesforceLink,  CustomerSalesConsoleLink: this.CustomerSalesConsoleLink, ProServTrainingSpentT12M: this.ProServTrainingSpentT12M}}))
  //     console.log('Account Updated:', result.data.updateAssessmentAccountDetails);
  //     event.target.reset();
  //   } catch (error) {
  //     console.error('Error Updating Account:', error);
  //   }
  // }

  async function listAccounts(){
    try {
      const accounts = await API.graphql(graphqlOperation(listAssessmentAccountDetails));
      console.log('Showing Accounts:', accounts.data.listAssessmentAccountDetails);
      // <View>
      //   <p> {accounts.data.listAssessmentAccountDetails} </p>
      
      //   this.state.accounts.map((account, i) => (
      //     <div>
      //       <h3>{accounts.AccountName}</h3>
      //       <p>{accounts.AccountManagerName, accounts.AccountSAName, accounts.AccountSalesforceLink, accounts.CustomerSalesConsoleLink, accounts.ProServTrainingSpentT12M}</p>
      //     </div>
      //   ))
      // </View>
    } catch (error) {
      console.error('Accounts Not Shown:', error);
    }
  }

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          console.log(note)
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  // async function fetchAccount() {
  //   const apiData = await API.graphql({ query: listAssessmentAccountDetails});
  //   //const apiData = {"accountName": "a", "accountManagerName" : "b"};

  //   const accountDetailsFromAPI = apiData.data.listAssessmentAccountDetails.items;
  //   await Promise.all(
  //     accountDetailsFromAPI.map(async (account) => {
  //       console.log(account);
  //       return account;
  //     })
  //   );
  //   setAccount(accountDetailsFromAPI);
  //   setAccount(apiData);
  // }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function createDistrict() {
    //const form = new FormData(event.target);
    const data = {
      ApprovedDistrict: "ApprovedDistricts",
      SoonToBeApprovedDistricts: "SoonToBeApprovedDistricts"
    }
    await API.graphql({
        query: createDistrictMutation,
        variables: {input: data}
    });
    // event.target.reset();
  }

async function createTerritorySelect() {
    // const form = new FormData(event.target);
    const data = {
      Territory: "Territory"
    }
    await API.graphql({
      query: createTerritorySelectMutation,
      variables: {input: data}
    });
    // event.target.reset();
  }

  async function createCustomerSelect() {
    // const form = new FormData(event.target);
    const data = {
      Customer: "Customer"
    }
    await API.graphql({
      query: createCustomerSelectMutation,
      variables: {input: data}
    });
    // event.target.reset();
  }

async function deleteAccount(){
  try{
    const tempID = prompt("Give An ID");
    if (tempID !== null) {
      // Continue with the logic
      console.log("Continuing with the logic");
      const check = prompt("Are You Sure You want to Delete Account with ID: " + tempID + " (Y/N)")
      if (check === 'Y') {
        // Continue with the function's logic
        console.log("Continuing with the function's logic");
        //console.log("Not This");
        //const deletedTodo = await API.graphql(input { id: tempID} );
        //console.log("Not This Either");
        const account = {id: "tempID"};
        const result = await API.graphql(graphqlOperation(deleteAssessmentAccountDetails, { input: {account} }))
        console.log('Account Deleted:', result.data.deleteAssessmentAccountDetails);

        //const result = await API.graphql(graphqlOperation(deleteAssessmentAccountDetails, { query: mutations.deleteAssessmentAccountDetails, variables: { id: tempID }}));
        //console.log('Account Deleted:', deletedTodo.data.deleteAssessmentAccountDetails);
      } else if (check === 'N') {
        // Break the function
        console.log("Breaking the function");
        return;
      } else {
        console.log("Invalid input");
        return;
      }
    } else {
      return;
    }
  } catch (error) {
    console.error('Error Deleting Account:', error);
  }
}


  

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  async function consoleUpdateMessage(){
    console.log("Use table direcly [*Transition In Development*]")
  }
  

  return (
      <View className="App">
        <Heading level={1}>GreenFeild to Engaged (GF2E)</Heading>
        <Heading level={2}>Customer Readiness Assessment</Heading>
        
        
        <View as="form" margin="3rem 0">
          <Flex direction="row" justifyContent="center">
            <View>
              <DistrictCreateForm />
            
            <View as="form" margin="3rem 0" /*onSubmit={createDistrict}*/>
              <TerritorySelectCreateForm/>
              
            </View>
            <View as="form" margin="3rem 0" /*onSubmit={createTerritorySelect}*/>
              <CustomerSelectCreateForm />
            </View>
            <View>
              <br></br>
              
              <Button variation="link" onClick={() => createAccount()}>
                  Create Account Details
              </Button>

              <Button variation="link" onClick={() => listAccounts()}>
                  Show Account Details
              </Button>

              <Button variation="link" onClick={() => consoleUpdateMessage()}>
                  Update Account Details
              </Button>

              <Button variation="link" /*onClick={() => deleteAccount()}*/>
                  Delete Account Details
              </Button>
            </View>

            <View>
              <br></br>
              <Heading level={2}>Data Table Visualizer</Heading>
            </View>
          </View>
            <View as="form" margin="3rem 0" onSubmit={createCustomerSelect}>
              {/* <AssessmentAccountDetailsCreateForm /> */}
            </View>  
          </Flex>
        </View>

                  {/* <View>
                    this.state.accounts.map((account, i) => (
                      <div>
                        <h3>{account.AccountName}</h3>
                        <p>{account.AccountManagerName, account.AccountSAName, account.AccountSalesforceLink, account.CustomerSalesConsoleLink, account.ProServTrainingSpentT12M}</p>
                      </div>
                    ))
                  </View> */}

        <View as="form" margin="3rem 0" onSubmit={updateAccountDetails}>
          <Flex direction="row" justifyContent="center">
            <TextField
              name="id"
              placeholder="AccountID (from datatable)"
              label="AccountID"
              labelHidden
              variation="quiet"
              required
              //value= {prompt("Give an ID")}
              //onClick={prompt("Give an ID")}
            />
            <TextField
              name="AccountName"
              placeholder="AccountName"
              label="AccountName"
              labelHidden
              variation="quiet"
              required
              //value={updateFormData.id}
              //onChange={(newValue) => handleUpdateFormChange('AccountName', newValue)}
            />
            <TextField
              name="AccountManagerName"
              placeholder="AccountManagerName"
              label="AccountManagerName"
              labelHidden
              variation="quiet"
              required
              //value={updateFormData.id}
              //onChange={(newValue) => handleUpdateFormChange('AccountManagerName', newValue)}
            />
            <TextField
              name="AccountSAName"
              placeholder="AccountSAName"
              label="AccountSAName"
              labelHidden
              variation="quiet"
              required
              //value={updateFormData.id}
              //onChange={(newValue) => handleUpdateFormChange('AccountSAName', newValue)}
            />
            <TextField
              name="AccountSalesforceLink"
              placeholder="AccountSalesforceLink"
              label="AccountSalesforceLink"
              labelHidden
              variation="quiet"
              required
              //value={updateFormData.id}
              //onChange={(newValue) => handleUpdateFormChange('AccountSalesforceLink', newValue)}
            />
            <TextField
              name="CustomerSalesConsoleLink"
              placeholder="CustomerSalesConsoleLink"
              label="CustomerSalesConsoleLink"
              labelHidden
              variation="quiet"
              required
              //value={updateFormData.id}
              //onChange={(newValue) => handleUpdateFormChange('CustomerSalesConsoleLink', newValue)}
            />
            <TextField
              name="ProServTrainingSpentT12M"
              placeholder="ProServTrainingSpentT12M"
              label="ProServTrainingSpentT12M"
              labelHidden
              variation="quiet"
              required
              inputMode="decimal"
              //value={updateFormData.id}
              //onChange={(newValue) => handleUpdateFormChange('ProServTrainingSpentT12M', newValue)}
            />
            <TextField
              name="_version"
              placeholder="_version (from datatable)"
              label="_version"
              labelHidden
              variation="quiet"
              required
              inputMode="integer"
              //value={updateFormData.id}
              //onChange={(newValue) => handleUpdateFormChange('_version', newValue)}
            />

            <Button type="submit" variation="primary" onClick={() => updateAccountDetails()}>
              Save Account Details
            </Button>

            {/* <Button type="submit" variation="primary" onClick={() => deleteAccount()}>
              Delete Account Details
            </Button> */}
          </Flex>
        </View>




        
        <Button onClick={signOut}>Sign Out</Button>
      </View>
  );
};

export default withAuthenticator(App);