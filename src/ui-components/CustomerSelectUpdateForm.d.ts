/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CustomerSelect } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerSelectUpdateFormInputValues = {
    Customer?: string;
};
export declare type CustomerSelectUpdateFormValidationValues = {
    Customer?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerSelectUpdateFormOverridesProps = {
    CustomerSelectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Customer?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CustomerSelectUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomerSelectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customerSelect?: CustomerSelect;
    onSubmit?: (fields: CustomerSelectUpdateFormInputValues) => CustomerSelectUpdateFormInputValues;
    onSuccess?: (fields: CustomerSelectUpdateFormInputValues) => void;
    onError?: (fields: CustomerSelectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerSelectUpdateFormInputValues) => CustomerSelectUpdateFormInputValues;
    onValidate?: CustomerSelectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerSelectUpdateForm(props: CustomerSelectUpdateFormProps): React.ReactElement;
