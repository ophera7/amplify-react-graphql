/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { District } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DistrictCreateForm(props) {
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
    ApprovedDistricts: "",
    SoonToBeApprovedDistricts: "",
  };
  const [ApprovedDistricts, setApprovedDistricts] = React.useState(
    initialValues.ApprovedDistricts
  );
  const [SoonToBeApprovedDistricts, setSoonToBeApprovedDistricts] =
    React.useState(initialValues.SoonToBeApprovedDistricts);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setApprovedDistricts(initialValues.ApprovedDistricts);
    setSoonToBeApprovedDistricts(initialValues.SoonToBeApprovedDistricts);
    setErrors({});
  };
  const validations = {
    ApprovedDistricts: [{ type: "Required" }],
    SoonToBeApprovedDistricts: [],
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
          ApprovedDistricts,
          SoonToBeApprovedDistricts,
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
          await DataStore.save(new District(modelFields));
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
      {...getOverrideProps(overrides, "DistrictCreateForm")}
      {...rest}
    >
      <SelectField
        label="Approved Districts"
        placeholder="Please select an option"
        isDisabled={false}
        value={ApprovedDistricts}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ApprovedDistricts: value,
              SoonToBeApprovedDistricts,
            };
            const result = onChange(modelFields);
            value = result?.ApprovedDistricts ?? value;
          }
          if (errors.ApprovedDistricts?.hasError) {
            runValidationTasks("ApprovedDistricts", value);
          }
          setApprovedDistricts(value);
        }}
        onBlur={() =>
          runValidationTasks("ApprovedDistricts", ApprovedDistricts)
        }
        errorMessage={errors.ApprovedDistricts?.errorMessage}
        hasError={errors.ApprovedDistricts?.hasError}
        {...getOverrideProps(overrides, "ApprovedDistricts")}
      >
        <option
          children="Midwest"
          value="MIDWEST"
          {...getOverrideProps(overrides, "ApprovedDistrictsoption0")}
        ></option>
      </SelectField>
      <SelectField
        label="*Soon to be Approved Districts [Not Active]*"
        descriptiveText="Future Districts to Gain Support for the GF2E App"
        placeholder="Districts in development"
        isDisabled={false}
        value={SoonToBeApprovedDistricts}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ApprovedDistricts,
              SoonToBeApprovedDistricts: value,
            };
            const result = onChange(modelFields);
            value = result?.SoonToBeApprovedDistricts ?? value;
          }
          if (errors.SoonToBeApprovedDistricts?.hasError) {
            runValidationTasks("SoonToBeApprovedDistricts", value);
          }
          setSoonToBeApprovedDistricts(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SoonToBeApprovedDistricts",
            SoonToBeApprovedDistricts
          )
        }
        errorMessage={errors.SoonToBeApprovedDistricts?.errorMessage}
        hasError={errors.SoonToBeApprovedDistricts?.hasError}
        {...getOverrideProps(overrides, "SoonToBeApprovedDistricts")}
      >
        <option
          children="Gulf Coast"
          value="GULFCOAST"
          {...getOverrideProps(overrides, "SoonToBeApprovedDistrictsoption0")}
        ></option>
        <option
          children="North Central"
          value="NORTHCENTRAL"
          {...getOverrideProps(overrides, "SoonToBeApprovedDistrictsoption1")}
        ></option>
        <option
          children="South Central"
          value="SOUTHCENTRAL"
          {...getOverrideProps(overrides, "SoonToBeApprovedDistrictsoption2")}
        ></option>
        <option
          children="Ohio Valley"
          value="OHIOVALLEY"
          {...getOverrideProps(overrides, "SoonToBeApprovedDistrictsoption3")}
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
