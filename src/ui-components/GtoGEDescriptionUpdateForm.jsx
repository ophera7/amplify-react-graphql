/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { GtoGEDescription } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function GtoGEDescriptionUpdateForm(props) {
  const {
    id: idProp,
    gtoGEDescription: gtoGEDescriptionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Company: "",
    Quarter: "",
    Date: "",
  };
  const [Company, setCompany] = React.useState(initialValues.Company);
  const [Quarter, setQuarter] = React.useState(initialValues.Quarter);
  const [Date, setDate] = React.useState(initialValues.Date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gtoGEDescriptionRecord
      ? { ...initialValues, ...gtoGEDescriptionRecord }
      : initialValues;
    setCompany(cleanValues.Company);
    setQuarter(cleanValues.Quarter);
    setDate(cleanValues.Date);
    setErrors({});
  };
  const [gtoGEDescriptionRecord, setGtoGEDescriptionRecord] = React.useState(
    gtoGEDescriptionModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(GtoGEDescription, idProp)
        : gtoGEDescriptionModelProp;
      setGtoGEDescriptionRecord(record);
    };
    queryData();
  }, [idProp, gtoGEDescriptionModelProp]);
  React.useEffect(resetStateValues, [gtoGEDescriptionRecord]);
  const validations = {
    Company: [],
    Quarter: [],
    Date: [],
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
          Company,
          Quarter,
          Date,
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
          await DataStore.save(
            GtoGEDescription.copyOf(gtoGEDescriptionRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GtoGEDescriptionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Company"
        isRequired={false}
        isReadOnly={false}
        value={Company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company: value,
              Quarter,
              Date,
            };
            const result = onChange(modelFields);
            value = result?.Company ?? value;
          }
          if (errors.Company?.hasError) {
            runValidationTasks("Company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("Company", Company)}
        errorMessage={errors.Company?.errorMessage}
        hasError={errors.Company?.hasError}
        {...getOverrideProps(overrides, "Company")}
      ></TextField>
      <TextField
        label="Quarter"
        isRequired={false}
        isReadOnly={false}
        value={Quarter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Quarter: value,
              Date,
            };
            const result = onChange(modelFields);
            value = result?.Quarter ?? value;
          }
          if (errors.Quarter?.hasError) {
            runValidationTasks("Quarter", value);
          }
          setQuarter(value);
        }}
        onBlur={() => runValidationTasks("Quarter", Quarter)}
        errorMessage={errors.Quarter?.errorMessage}
        hasError={errors.Quarter?.hasError}
        {...getOverrideProps(overrides, "Quarter")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Quarter,
              Date: value,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || gtoGEDescriptionModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || gtoGEDescriptionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
