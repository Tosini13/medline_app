import { Controller, UseControllerProps } from "react-hook-form";

import EventType from "../EventType";

type TControlledEventTypeProps<FormValues> = UseControllerProps<FormValues>;

const ControlledEventType = <FormValues extends {}>({
  control,
  name,
  rules,
  ...props
}: TControlledEventTypeProps<FormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <EventType type={value} setType={onChange} />
      )}
    />
  );
};

export default ControlledEventType;
