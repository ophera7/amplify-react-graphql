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
export declare type TerritorySlider2CreateFormInputValues = {
    Field0?: string;
};
export declare type TerritorySlider2CreateFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TerritorySlider2CreateFormOverridesProps = {
    TerritorySlider2CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TerritorySlider2CreateFormProps = React.PropsWithChildren<{
    overrides?: TerritorySlider2CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TerritorySlider2CreateFormInputValues) => TerritorySlider2CreateFormInputValues;
    onSuccess?: (fields: TerritorySlider2CreateFormInputValues) => void;
    onError?: (fields: TerritorySlider2CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TerritorySlider2CreateFormInputValues) => TerritorySlider2CreateFormInputValues;
    onValidate?: TerritorySlider2CreateFormValidationValues;
} & React.CSSProperties>;
export default function TerritorySlider2CreateForm(props: TerritorySlider2CreateFormProps): React.ReactElement;
