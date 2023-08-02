/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AssessmentAccountDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssessmentAccountDetailsUpdateFormInputValues = {
    AccountName?: string;
    AccountManagerName?: string;
    AccountSAName?: string;
    AccountSalesforceLink?: string;
    CustomerSalesConsoleLine?: string;
    ProServTrainingSpentT12M?: number;
};
export declare type AssessmentAccountDetailsUpdateFormValidationValues = {
    AccountName?: ValidationFunction<string>;
    AccountManagerName?: ValidationFunction<string>;
    AccountSAName?: ValidationFunction<string>;
    AccountSalesforceLink?: ValidationFunction<string>;
    CustomerSalesConsoleLine?: ValidationFunction<string>;
    ProServTrainingSpentT12M?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssessmentAccountDetailsUpdateFormOverridesProps = {
    AssessmentAccountDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    AccountName?: PrimitiveOverrideProps<TextFieldProps>;
    AccountManagerName?: PrimitiveOverrideProps<TextFieldProps>;
    AccountSAName?: PrimitiveOverrideProps<TextFieldProps>;
    AccountSalesforceLink?: PrimitiveOverrideProps<TextFieldProps>;
    CustomerSalesConsoleLine?: PrimitiveOverrideProps<TextFieldProps>;
    ProServTrainingSpentT12M?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssessmentAccountDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssessmentAccountDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    assessmentAccountDetails?: AssessmentAccountDetails;
    onSubmit?: (fields: AssessmentAccountDetailsUpdateFormInputValues) => AssessmentAccountDetailsUpdateFormInputValues;
    onSuccess?: (fields: AssessmentAccountDetailsUpdateFormInputValues) => void;
    onError?: (fields: AssessmentAccountDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssessmentAccountDetailsUpdateFormInputValues) => AssessmentAccountDetailsUpdateFormInputValues;
    onValidate?: AssessmentAccountDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssessmentAccountDetailsUpdateForm(props: AssessmentAccountDetailsUpdateFormProps): React.ReactElement;
