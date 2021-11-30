import React from 'react';
import { Grid } from "@mui/material";
import { Control } from "react-hook-form";
import { TextFieldRUForm } from "../../forms/TextField";
import ControlledDateTimePicker from '../../forms/controlled/ControlledDateTimePicker';

import { BLOOD_GROUP, rhesusFactorOptions, bloodGroupOptions, RH_FACTOR } from '../../../models/backend';
import ControlledSelect from '../../forms/controlled/ControlledSelect';

export type TUserForm = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date | null;
  bloodGroup: BLOOD_GROUP | "";
  rhesusFactor: RH_FACTOR | "";
};

type TUserFormProps = {
  Actions: React.ReactNode;
  control: Control<TUserForm>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

const UserForm: React.FC<TUserFormProps> = ({
  Actions,
  control,
  handleSubmit,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4} direction="column" alignItems="stretch">
        <Grid item>
          <TextFieldRUForm
            fullWidth
            control={control}
            name="firstName"
            label="First Name"
            rules={{ required: true }}
          />
        </Grid>
        <Grid item>
          <TextFieldRUForm
            fullWidth
            control={control}
            name="lastName"
            label="Last Name"
            rules={{ required: true }}
          />
        </Grid>
        <Grid item>
          <TextFieldRUForm
            fullWidth
            control={control}
            name="email"
            label="Email"
            rules={{ required: true }}
          />
        </Grid>
        <Grid item>
          <ControlledDateTimePicker
            label="Date of Birth"
            name="dateOfBirth"
            control={control}
            clearable
          />
        </Grid>
        <Grid item>
          <ControlledSelect
            defaultValue=""
            label="Blood Group"
            name="bloodGroup"
            control={control}
            options={bloodGroupOptions}
            clearable
          />
        </Grid>
        <Grid item>
          <ControlledSelect
            defaultValue=""
            label="Rhesus Factor"
            name="rhesusFactor"
            control={control}
            options={rhesusFactorOptions}
            clearable
          />
        </Grid>
        <Grid item alignSelf="stretch">
          {Actions}
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;
