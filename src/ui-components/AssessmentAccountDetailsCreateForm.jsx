/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AssessmentAccountDetails } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AssessmentAccountDetailsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    AccountName: "",
    AccountManagerName: "",
    AccountSAName: "",
    AccountSalesforceLink: "",
    CustomerSalesConsoleLine: "",
    ProServTrainingSpentT12M: "",
  };
  const [AccountName, setAccountName] = React.useState(
    initialValues.AccountName
  );
  const [AccountManagerName, setAccountManagerName] = React.useState(
    initialValues.AccountManagerName
  );
  const [AccountSAName, setAccountSAName] = React.useState(
    initialValues.AccountSAName
  );
  const [AccountSalesforceLink, setAccountSalesforceLink] = React.useState(
    initialValues.AccountSalesforceLink
  );
  const [CustomerSalesConsoleLine, setCustomerSalesConsoleLine] =
    React.useState(initialValues.CustomerSalesConsoleLine);
  const [ProServTrainingSpentT12M, setProServTrainingSpentT12M] =
    React.useState(initialValues.ProServTrainingSpentT12M);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAccountName(initialValues.AccountName);
    setAccountManagerName(initialValues.AccountManagerName);
    setAccountSAName(initialValues.AccountSAName);
    setAccountSalesforceLink(initialValues.AccountSalesforceLink);
    setCustomerSalesConsoleLine(initialValues.CustomerSalesConsoleLine);
    setProServTrainingSpentT12M(initialValues.ProServTrainingSpentT12M);
    setErrors({});
  };
  const validations = {
    AccountName: [],
    AccountManagerName: [],
    AccountSAName: [],
    AccountSalesforceLink: [{ type: "URL" }],
    CustomerSalesConsoleLine: [{ type: "URL" }],
    ProServTrainingSpentT12M: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          AccountName,
          AccountManagerName,
          AccountSAName,
          AccountSalesforceLink,
          CustomerSalesConsoleLine,
          ProServTrainingSpentT12M,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new AssessmentAccountDetails(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AssessmentAccountDetailsCreateForm")}
      {...rest}
    >
      <TextField
        label="Account name"
        isRequired={false}
        isReadOnly={false}
        value={AccountName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AccountName: value,
              AccountManagerName,
              AccountSAName,
              AccountSalesforceLink,
              CustomerSalesConsoleLine,
              ProServTrainingSpentT12M,
            };
            const result = onChange(modelFields);
            value = result?.AccountName ?? value;
          }
          if (errors.AccountName?.hasError) {
            runValidationTasks("AccountName", value);
          }
          setAccountName(value);
        }}
        onBlur={() => runValidationTasks("AccountName", AccountName)}
        errorMessage={errors.AccountName?.errorMessage}
        hasError={errors.AccountName?.hasError}
        {...getOverrideProps(overrides, "AccountName")}
      ></TextField>
      <TextField
        label="Account manager name"
        isRequired={false}
        isReadOnly={false}
        value={AccountManagerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AccountName,
              AccountManagerName: value,
              AccountSAName,
              AccountSalesforceLink,
              CustomerSalesConsoleLine,
              ProServTrainingSpentT12M,
            };
            const result = onChange(modelFields);
            value = result?.AccountManagerName ?? value;
          }
          if (errors.AccountManagerName?.hasError) {
            runValidationTasks("AccountManagerName", value);
          }
          setAccountManagerName(value);
        }}
        onBlur={() =>
          runValidationTasks("AccountManagerName", AccountManagerName)
        }
        errorMessage={errors.AccountManagerName?.errorMessage}
        hasError={errors.AccountManagerName?.hasError}
        {...getOverrideProps(overrides, "AccountManagerName")}
      ></TextField>
      <TextField
        label="Account sa name"
        isRequired={false}
        isReadOnly={false}
        value={AccountSAName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AccountName,
              AccountManagerName,
              AccountSAName: value,
              AccountSalesforceLink,
              CustomerSalesConsoleLine,
              ProServTrainingSpentT12M,
            };
            const result = onChange(modelFields);
            value = result?.AccountSAName ?? value;
          }
          if (errors.AccountSAName?.hasError) {
            runValidationTasks("AccountSAName", value);
          }
          setAccountSAName(value);
        }}
        onBlur={() => runValidationTasks("AccountSAName", AccountSAName)}
        errorMessage={errors.AccountSAName?.errorMessage}
        hasError={errors.AccountSAName?.hasError}
        {...getOverrideProps(overrides, "AccountSAName")}
      ></TextField>
      <TextField
        label="Account salesforce link"
        isRequired={false}
        isReadOnly={false}
        value={AccountSalesforceLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AccountName,
              AccountManagerName,
              AccountSAName,
              AccountSalesforceLink: value,
              CustomerSalesConsoleLine,
              ProServTrainingSpentT12M,
            };
            const result = onChange(modelFields);
            value = result?.AccountSalesforceLink ?? value;
          }
          if (errors.AccountSalesforceLink?.hasError) {
            runValidationTasks("AccountSalesforceLink", value);
          }
          setAccountSalesforceLink(value);
        }}
        onBlur={() =>
          runValidationTasks("AccountSalesforceLink", AccountSalesforceLink)
        }
        errorMessage={errors.AccountSalesforceLink?.errorMessage}
        hasError={errors.AccountSalesforceLink?.hasError}
        {...getOverrideProps(overrides, "AccountSalesforceLink")}
      ></TextField>
      <TextField
        label="Customer sales console line"
        isRequired={false}
        isReadOnly={false}
        value={CustomerSalesConsoleLine}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AccountName,
              AccountManagerName,
              AccountSAName,
              AccountSalesforceLink,
              CustomerSalesConsoleLine: value,
              ProServTrainingSpentT12M,
            };
            const result = onChange(modelFields);
            value = result?.CustomerSalesConsoleLine ?? value;
          }
          if (errors.CustomerSalesConsoleLine?.hasError) {
            runValidationTasks("CustomerSalesConsoleLine", value);
          }
          setCustomerSalesConsoleLine(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "CustomerSalesConsoleLine",
            CustomerSalesConsoleLine
          )
        }
        errorMessage={errors.CustomerSalesConsoleLine?.errorMessage}
        hasError={errors.CustomerSalesConsoleLine?.hasError}
        {...getOverrideProps(overrides, "CustomerSalesConsoleLine")}
      ></TextField>
      <TextField
        label="Pro serv training spent t12 m"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ProServTrainingSpentT12M}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              AccountName,
              AccountManagerName,
              AccountSAName,
              AccountSalesforceLink,
              CustomerSalesConsoleLine,
              ProServTrainingSpentT12M: value,
            };
            const result = onChange(modelFields);
            value = result?.ProServTrainingSpentT12M ?? value;
          }
          if (errors.ProServTrainingSpentT12M?.hasError) {
            runValidationTasks("ProServTrainingSpentT12M", value);
          }
          setProServTrainingSpentT12M(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ProServTrainingSpentT12M",
            ProServTrainingSpentT12M
          )
        }
        errorMessage={errors.ProServTrainingSpentT12M?.errorMessage}
        hasError={errors.ProServTrainingSpentT12M?.hasError}
        {...getOverrideProps(overrides, "ProServTrainingSpentT12M")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
