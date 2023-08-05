/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerSelectCreateFormInputValues = {
    Customer?: string;
};
export declare type CustomerSelectCreateFormValidationValues = {
    Customer?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerSelectCreateFormOverridesProps = {
    CustomerSelectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Customer?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CustomerSelectCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerSelectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerSelectCreateFormInputValues) => CustomerSelectCreateFormInputValues;
    onSuccess?: (fields: CustomerSelectCreateFormInputValues) => void;
    onError?: (fields: CustomerSelectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerSelectCreateFormInputValues) => CustomerSelectCreateFormInputValues;
    onValidate?: CustomerSelectCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerSelectCreateForm(props: CustomerSelectCreateFormProps): React.ReactElement;
