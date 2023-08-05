/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { District } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DistrictUpdateFormInputValues = {
    ApprovedDistricts?: string;
    SoonToBeApprovedDistricts?: string;
};
export declare type DistrictUpdateFormValidationValues = {
    ApprovedDistricts?: ValidationFunction<string>;
    SoonToBeApprovedDistricts?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistrictUpdateFormOverridesProps = {
    DistrictUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ApprovedDistricts?: PrimitiveOverrideProps<SelectFieldProps>;
    SoonToBeApprovedDistricts?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type DistrictUpdateFormProps = React.PropsWithChildren<{
    overrides?: DistrictUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    district?: District;
    onSubmit?: (fields: DistrictUpdateFormInputValues) => DistrictUpdateFormInputValues;
    onSuccess?: (fields: DistrictUpdateFormInputValues) => void;
    onError?: (fields: DistrictUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DistrictUpdateFormInputValues) => DistrictUpdateFormInputValues;
    onValidate?: DistrictUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DistrictUpdateForm(props: DistrictUpdateFormProps): React.ReactElement;
