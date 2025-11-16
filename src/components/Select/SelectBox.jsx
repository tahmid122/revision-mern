import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBox({
  getSelectValue = () => {},
  label = "",
  placeholder = "",
  values = [],
}) {
  return (
    <Select onValueChange={(value) => getSelectValue(value)}>
      <SelectTrigger className="min-w-[180px] max-w-[200px] bg-white border border-slate-300 focus:ring-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white border-none">
        <SelectGroup className="outline-none">
          <SelectLabel>{label}</SelectLabel>
          {values &&
            values?.length > 0 &&
            values.map((value, index) => (
              <SelectItem
                className="hover:bg-gray-100 cursor-pointer"
                key={index}
                value={value?.value}
              >
                {value?.title}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
