type CheckboxValue = string | number;

export interface Props {
  modelValue: boolean | CheckboxValue[];
  value?: CheckboxValue;
  label?: string;
  size?: "sm" | "md" | "lg";
}
