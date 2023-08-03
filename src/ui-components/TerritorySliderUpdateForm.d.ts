/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TerritorySlider } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TerritorySliderUpdateFormInputValues = {
    Field0?: string;
};
export declare type TerritorySliderUpdateFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TerritorySliderUpdateFormOverridesProps = {
    TerritorySliderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TerritorySliderUpdateFormProps = React.PropsWithChildren<{
    overrides?: TerritorySliderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    territorySlider?: TerritorySlider;
    onSubmit?: (fields: TerritorySliderUpdateFormInputValues) => TerritorySliderUpdateFormInputValues;
    onSuccess?: (fields: TerritorySliderUpdateFormInputValues) => void;
    onError?: (fields: TerritorySliderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TerritorySliderUpdateFormInputValues) => TerritorySliderUpdateFormInputValues;
    onValidate?: TerritorySliderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TerritorySliderUpdateForm(props: TerritorySliderUpdateFormProps): React.ReactElement;
