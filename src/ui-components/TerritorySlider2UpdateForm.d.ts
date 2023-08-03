/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TerritorySlider2 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TerritorySlider2UpdateFormInputValues = {
    Field0?: string;
};
export declare type TerritorySlider2UpdateFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TerritorySlider2UpdateFormOverridesProps = {
    TerritorySlider2UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TerritorySlider2UpdateFormProps = React.PropsWithChildren<{
    overrides?: TerritorySlider2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    territorySlider2?: TerritorySlider2;
    onSubmit?: (fields: TerritorySlider2UpdateFormInputValues) => TerritorySlider2UpdateFormInputValues;
    onSuccess?: (fields: TerritorySlider2UpdateFormInputValues) => void;
    onError?: (fields: TerritorySlider2UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TerritorySlider2UpdateFormInputValues) => TerritorySlider2UpdateFormInputValues;
    onValidate?: TerritorySlider2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function TerritorySlider2UpdateForm(props: TerritorySlider2UpdateFormProps): React.ReactElement;
