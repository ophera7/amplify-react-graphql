/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TerritorySelect } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TerritorySelectCreateForm(props) {
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
    Territory: "",
  };
  const [Territory, setTerritory] = React.useState(initialValues.Territory);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTerritory(initialValues.Territory);
    setErrors({});
  };
  const validations = {
    Territory: [{ type: "Required" }],
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
          Territory,
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
          await DataStore.save(new TerritorySelect(modelFields));
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
      {...getOverrideProps(overrides, "TerritorySelectCreateForm")}
      {...rest}
    >
      <SelectField
        label="Territory"
        placeholder="Please select an option"
        isDisabled={false}
        value={Territory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Territory: value,
            };
            const result = onChange(modelFields);
            value = result?.Territory ?? value;
          }
          if (errors.Territory?.hasError) {
            runValidationTasks("Territory", value);
          }
          setTerritory(value);
        }}
        onBlur={() => runValidationTasks("Territory", Territory)}
        errorMessage={errors.Territory?.errorMessage}
        hasError={errors.Territory?.hasError}
        {...getOverrideProps(overrides, "Territory")}
      >
        <option
          children="MWGF01"
          value="MWGF01"
          {...getOverrideProps(overrides, "Territoryoption0")}
        ></option>
        <option
          children="MWGF02"
          value="MWGF02"
          {...getOverrideProps(overrides, "Territoryoption1")}
        ></option>
        <option
          children="MWGF03"
          value="MWGF03"
          {...getOverrideProps(overrides, "Territoryoption2")}
        ></option>
        <option
          children="MWGF04"
          value="MWGF04"
          {...getOverrideProps(overrides, "Territoryoption3")}
        ></option>
        <option
          children="MWGF05"
          value="MWGF05"
          {...getOverrideProps(overrides, "Territoryoption4")}
        ></option>
        <option
          children="MWGF06"
          value="MWGF06"
          {...getOverrideProps(overrides, "Territoryoption5")}
        ></option>
        <option
          children="MWGF07"
          value="MWGF07"
          {...getOverrideProps(overrides, "Territoryoption6")}
        ></option>
        <option
          children="MWGF08"
          value="MWGF08"
          {...getOverrideProps(overrides, "Territoryoption7")}
        ></option>
        <option
          children="MWGF09"
          value="MWGF09"
          {...getOverrideProps(overrides, "Territoryoption8")}
        ></option>
      </SelectField>
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
