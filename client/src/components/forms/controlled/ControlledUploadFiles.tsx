import { styled as muiStyled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { AttachFile, Delete } from "@mui/icons-material";
import { Controller, UseControllerProps } from "react-hook-form";
import styled from "styled-components";

const IconButtonStyled = styled.span<{
  bordered?: boolean;
}>`
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-left: -12px;
  color: #000;
  padding: 12px;
  font-size: 1.75rem;
  border-radius: 50%;
  display: inline-flex;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  ${(props) => (props.bordered ? "border: black solid 1px;" : "")}
`;

const Input = muiStyled("input")({
  display: "none",
});

type TControlledUploadFilesProps<FormValues> = UseControllerProps<FormValues>;

const ControlledUploadFiles = <FormValues extends {}>({
  control,
  name,
  rules,
  ...props
}: TControlledUploadFilesProps<FormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        const files = value && Object.values(value);
        const isUploaded = Boolean(files);
        return (
          <div style={{ position: "relative" }}>
            {isUploaded ? (
              <IconButtonStyled
                aria-label="upload picture"
                onClick={() => onChange(null)}
              >
                <Delete color="error" />
              </IconButtonStyled>
            ) : (
              <label htmlFor="contained-button-file">
                <Input
                  // accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={(e) => {
                    onChange(e.target.files);
                  }}
                />
                <IconButtonStyled aria-label="upload picture">
                  <AttachFile color="primary" />
                </IconButtonStyled>
              </label>
            )}
            {files && (
              <Typography
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "50%",
                  width: "fit-content",
                  transform: "translate(-50%, 80%)",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                }}
                color="primary"
              >
                {"Uploaded " + files.length + " files"}
              </Typography>
            )}
          </div>
        );
      }}
    />
  );
};

export default ControlledUploadFiles;
