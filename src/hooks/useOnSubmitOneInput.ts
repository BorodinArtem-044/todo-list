import { FormEvent, useRef } from "react";

const useOnSubmitOneInput = (callback: (v: string) => void) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = inputRef.current?.value && inputRef.current.value.trim();

    if (value) {
      callback(value);
      inputRef.current.value = "";
    }
  };
  return { inputRef, onSubmit };
};

export default useOnSubmitOneInput;
