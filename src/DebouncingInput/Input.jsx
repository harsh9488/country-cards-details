import { useEffect, useState } from "react";
import useDebounce from "./DebouncingHook";

const Input = () => {
  const [value, setValue] = useState("");
  const debounce = useDebounce(value);
  useEffect(() => {
    console.log(debounce);
  }, [debounce]); // Add 'value' to the dependency array

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default Input;
