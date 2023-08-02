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
export declare type DimensionCreateFormInputValues = {
    OverallReadiness?: number;
};
export declare type DimensionCreateFormValidationValues = {
    OverallReadiness?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DimensionCreateFormOverridesProps = {
    DimensionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    OverallReadiness?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DimensionCreateFormProps = React.PropsWithChildren<{
    overrides?: DimensionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DimensionCreateFormInputValues) => DimensionCreateFormInputValues;
    onSuccess?: (fields: DimensionCreateFormInputValues) => void;
    onError?: (fields: DimensionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DimensionCreateFormInputValues) => DimensionCreateFormInputValues;
    onValidate?: DimensionCreateFormValidationValues;
} & React.CSSProperties>;
export default function DimensionCreateForm(props: DimensionCreateFormProps): React.ReactElement;
