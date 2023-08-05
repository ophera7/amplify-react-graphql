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
export declare type DistrictCreateFormInputValues = {
    ApprovedDistricts?: string;
    SoonToBeApprovedDistricts?: string;
};
export declare type DistrictCreateFormValidationValues = {
    ApprovedDistricts?: ValidationFunction<string>;
    SoonToBeApprovedDistricts?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistrictCreateFormOverridesProps = {
    DistrictCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ApprovedDistricts?: PrimitiveOverrideProps<SelectFieldProps>;
    SoonToBeApprovedDistricts?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type DistrictCreateFormProps = React.PropsWithChildren<{
    overrides?: DistrictCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DistrictCreateFormInputValues) => DistrictCreateFormInputValues;
    onSuccess?: (fields: DistrictCreateFormInputValues) => void;
    onError?: (fields: DistrictCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DistrictCreateFormInputValues) => DistrictCreateFormInputValues;
    onValidate?: DistrictCreateFormValidationValues;
} & React.CSSProperties>;
export default function DistrictCreateForm(props: DistrictCreateFormProps): React.ReactElement;
