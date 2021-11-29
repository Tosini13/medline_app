import { Controller, UseControllerProps } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export type TSelectOption = {
    value: string | number;
    label: string;
};

type TControlledSelectProps<FormValues> = UseControllerProps<FormValues> & {
    label: string;
    options: TSelectOption[];
    clearable?: boolean;
};

const ControlledSelect = <FormValues extends {}>({
    control,
    name,
    label,
    options,
    rules,
    clearable
}: TControlledSelectProps<FormValues>) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                    <InputLabel id={`select-label-${name}`}>{label}</InputLabel>
                    <Select
                        labelId={`select-label-${name}`}
                        id={`select-${name}`}
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        {clearable &&
                            (<MenuItem value="">
                                <em>None</em>
                            </MenuItem>)}
                        {options.map(option => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
        />
    );
};

export default ControlledSelect;
