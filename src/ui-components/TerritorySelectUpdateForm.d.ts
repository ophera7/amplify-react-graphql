/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TerritorySelect } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TerritorySelectUpdateFormInputValues = {
    Territory?: string;
};
export declare type TerritorySelectUpdateFormValidationValues = {
    Territory?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TerritorySelectUpdateFormOverridesProps = {
    TerritorySelectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Territory?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TerritorySelectUpdateFormProps = React.PropsWithChildren<{
    overrides?: TerritorySelectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    territorySelect?: TerritorySelect;
    onSubmit?: (fields: TerritorySelectUpdateFormInputValues) => TerritorySelectUpdateFormInputValues;
    onSuccess?: (fields: TerritorySelectUpdateFormInputValues) => void;
    onError?: (fields: TerritorySelectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TerritorySelectUpdateFormInputValues) => TerritorySelectUpdateFormInputValues;
    onValidate?: TerritorySelectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TerritorySelectUpdateForm(props: TerritorySelectUpdateFormProps): React.ReactElement;
