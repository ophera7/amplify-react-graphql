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
export declare type GtoGEDescriptionCreateFormInputValues = {
    Company?: string;
    Quarter?: string;
    Date?: string;
};
export declare type GtoGEDescriptionCreateFormValidationValues = {
    Company?: ValidationFunction<string>;
    Quarter?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GtoGEDescriptionCreateFormOverridesProps = {
    GtoGEDescriptionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Company?: PrimitiveOverrideProps<TextFieldProps>;
    Quarter?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GtoGEDescriptionCreateFormProps = React.PropsWithChildren<{
    overrides?: GtoGEDescriptionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GtoGEDescriptionCreateFormInputValues) => GtoGEDescriptionCreateFormInputValues;
    onSuccess?: (fields: GtoGEDescriptionCreateFormInputValues) => void;
    onError?: (fields: GtoGEDescriptionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GtoGEDescriptionCreateFormInputValues) => GtoGEDescriptionCreateFormInputValues;
    onValidate?: GtoGEDescriptionCreateFormValidationValues;
} & React.CSSProperties>;
export default function GtoGEDescriptionCreateForm(props: GtoGEDescriptionCreateFormProps): React.ReactElement;
