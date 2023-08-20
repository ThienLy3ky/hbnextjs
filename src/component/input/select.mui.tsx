import { Autocomplete, TextField } from "@mui/material";
const optionsdefaul = [{ _id: "", name: "Khong co du lieu" }];
export default function InputSelect(props: any) {
  const {
    options,
    multiple,
    readOnly = false,
    defaultValue,
    value,
    label,
    row = false,
    alignLabel = "left",
    placeholder,
    change,
  } = props;
  const onChange = (e: any, value: any) => {
    change(value?._id);
  };

  return (
    <div
      className={
        row ? "form-group row align-items-end" : "form-group align-items-end "
      }
    >
      <label
        className={
          row ? "col-sm-3 col-form-label pl-4" : "col-12 col-form-label pl-4"
        }
        style={{
          fontWeight: "bolder",
          color: "darkblue",
          textAlign: alignLabel || "left",
        }}
      >
        {label}
      </label>
      <div
        className={
          row
            ? "col-sm-9 pl-0"
            : "col-12 col-form-label pl-4  d-flex justify-content-center"
        }
      >
        <Autocomplete
          multiple={multiple} //multiple field
          id="tags-outlined"
          options={options || optionsdefaul}
          getOptionLabel={(option: any) => option.name}
          readOnly={readOnly} //disable
          value={
            defaultValue
              ? options?.find((option: any) => option._id === defaultValue)
              : null
          }
          // filterSelectedOptions
          onChange={onChange}
          renderInput={(params: any) => (
            <TextField {...params} label={label} placeholder={placeholder} />
          )}
        />
      </div>
    </div>
  );
}
