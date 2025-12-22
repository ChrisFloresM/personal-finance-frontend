import {
  CloseButton,
  Field,
  Fieldset,
  Legend,
  Popover,
  PopoverButton,
  PopoverPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { avatars } from "./avatars.ts";
import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
  type PathValue,
} from "react-hook-form";

interface ICheckboxInputProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  defaultValue?: PathValue<T, FieldPath<T>>;
}

function AvatarPicker<T extends FieldValues>({
  name,
  control,
  defaultValue,
}: ICheckboxInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <Fieldset className="space-y-1">
          <Legend className="text-preset-5 leading-preset-5 text-grey-500 block font-bold">
            Avatar:
          </Legend>
          <Popover className="relative">
            <PopoverButton className="w-[50px] hover:cursor-pointer">
              <img
                src={field.value ?? avatars[0].src}
                alt="current selected avatar"
                className="rounded-full"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="bg-beige-100 animate-fadein absolute top-0 left-0 -translate-y-full rounded-lg p-200 shadow-2xl transition duration-200 data-closed:scale-95 data-closed:opacity-0"
            >
              <RadioGroup
                value={field.value}
                onChange={field.onChange}
                name="avatar"
                className="z-100 grid grid-cols-6 gap-200 md:grid-cols-10"
              >
                {avatars.map((avatar) => (
                  <CloseButton>
                    <Field key={avatar.id}>
                      <Radio value={avatar.src}>
                        <img
                          src={avatar.src}
                          alt="An avatar option"
                          className={`hover:ring-grey-500 text-preset-5 leading-preset-5 rounded-full hover:cursor-pointer hover:ring-1 ${field.value == avatar.src ? "border-grey-900 border-2" : ""}`}
                        />
                      </Radio>
                    </Field>
                  </CloseButton>
                ))}
              </RadioGroup>
            </PopoverPanel>
          </Popover>
          {fieldState.error && (
            <span className="text-preset-5 leading-preset-5 text-red-500">
              Error on this selection: {fieldState.error.message}{" "}
            </span>
          )}
        </Fieldset>
      )}
    />
  );
}

export default AvatarPicker;
