/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssessmentAccountDetailsCreateFormInputValues = {
    AccountName?: string;
    AccountManagerName?: string;
    AccountSAName?: string;
    AccountSalesforceLink?: string;
    CustomerSalesConsoleLine?: string;
    ProServTrainingSpentT12M?: number;
};
export declare type AssessmentAccountDetailsCreateFormValidationValues = {
    AccountName?: ValidationFunction<string>;
    AccountManagerName?: ValidationFunction<string>;
    AccountSAName?: ValidationFunction<string>;
    AccountSalesforceLink?: ValidationFunction<string>;
    CustomerSalesConsoleLine?: ValidationFunction<string>;
    ProServTrainingSpentT12M?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssessmentAccountDetailsCreateFormOverridesProps = {
    AssessmentAccountDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    AccountName?: PrimitiveOverrideProps<TextFieldProps>;
    AccountManagerName?: PrimitiveOverrideProps<TextFieldProps>;
    AccountSAName?: PrimitiveOverrideProps<TextFieldProps>;
    AccountSalesforceLink?: PrimitiveOverrideProps<TextFieldProps>;
    CustomerSalesConsoleLine?: PrimitiveOverrideProps<TextFieldProps>;
    ProServTrainingSpentT12M?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssessmentAccountDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: AssessmentAccountDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssessmentAccountDetailsCreateFormInputValues) => AssessmentAccountDetailsCreateFormInputValues;
    onSuccess?: (fields: AssessmentAccountDetailsCreateFormInputValues) => void;
    onError?: (fields: AssessmentAccountDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssessmentAccountDetailsCreateFormInputValues) => AssessmentAccountDetailsCreateFormInputValues;
    onValidate?: AssessmentAccountDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssessmentAccountDetailsCreateForm(props: AssessmentAccountDetailsCreateFormProps): React.ReactElement;
