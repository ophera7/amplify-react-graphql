/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Dimension } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DimensionUpdateFormInputValues = {
    OverallReadiness?: number;
};
export declare type DimensionUpdateFormValidationValues = {
    OverallReadiness?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DimensionUpdateFormOverridesProps = {
    DimensionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    OverallReadiness?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DimensionUpdateFormProps = React.PropsWithChildren<{
    overrides?: DimensionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dimension?: Dimension;
    onSubmit?: (fields: DimensionUpdateFormInputValues) => DimensionUpdateFormInputValues;
    onSuccess?: (fields: DimensionUpdateFormInputValues) => void;
    onError?: (fields: DimensionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DimensionUpdateFormInputValues) => DimensionUpdateFormInputValues;
    onValidate?: DimensionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DimensionUpdateForm(props: DimensionUpdateFormProps): React.ReactElement;
