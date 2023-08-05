/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CustomerSelect } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CustomerSelectUpdateForm(props) {
  const {
    id: idProp,
    customerSelect: customerSelectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Customer: "",
  };
  const [Customer, setCustomer] = React.useState(initialValues.Customer);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = customerSelectRecord
      ? { ...initialValues, ...customerSelectRecord }
      : initialValues;
    setCustomer(cleanValues.Customer);
    setErrors({});
  };
  const [customerSelectRecord, setCustomerSelectRecord] = React.useState(
    customerSelectModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CustomerSelect, idProp)
        : customerSelectModelProp;
      setCustomerSelectRecord(record);
    };
    queryData();
  }, [idProp, customerSelectModelProp]);
  React.useEffect(resetStateValues, [customerSelectRecord]);
  const validations = {
    Customer: [{ type: "Required" }],
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
          Customer,
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
            CustomerSelect.copyOf(customerSelectRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CustomerSelectUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Customer"
        placeholder="Please select an option"
        isDisabled={false}
        value={Customer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Customer: value,
            };
            const result = onChange(modelFields);
            value = result?.Customer ?? value;
          }
          if (errors.Customer?.hasError) {
            runValidationTasks("Customer", value);
          }
          setCustomer(value);
        }}
        onBlur={() => runValidationTasks("Customer", Customer)}
        errorMessage={errors.Customer?.errorMessage}
        hasError={errors.Customer?.hasError}
        {...getOverrideProps(overrides, "Customer")}
      >
        <option
          children="Companyx"
          value="COMPANYX"
          {...getOverrideProps(overrides, "Customeroption0")}
        ></option>
        <option
          children="Companyy"
          value="COMPANYY"
          {...getOverrideProps(overrides, "Customeroption1")}
        ></option>
        <option
          children="Companyz"
          value="COMPANYZ"
          {...getOverrideProps(overrides, "Customeroption2")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || customerSelectModelProp)}
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
              !(idProp || customerSelectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
