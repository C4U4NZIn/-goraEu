'use client';

import { useState, useEffect, useRef } from "react";
import "./style.css";
export default function Input({ isLoading, callback }) {
  const [code, setCode] = useState("");

  const inputRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    if (code.length === 6) {
      if (typeof callback === "function") {
        callback(code);
      }
    }
  }, [code]);

  const handleCaptureCaracter = (event, index) => {
    const caracterAction = event.target;
    const caracter = caracterAction.value;
    const prevCaracter = inputRef[index - 1];
    const nextCaracter = inputRef[index + 1];

    const completeCode = [...code];

    completeCode[index] = caracter;

    caracterAction.select();

    if (caracter === "") {
      if (prevCaracter) {
        prevCaracter.current.focus();
      }
    } else if (nextCaracter) {
      nextCaracter.current.focus();
    }

    setCode(completeCode.join(""));
  };

  const verifyIsNull = (code) => {
    if (code === "") return true;

    return false;
  };

  const handleConsoleCode = (code) => {
    if (verifyIsNull(code)) console.log("empty");

    console.log(code);
  };

  const onHandleFocus = (event) => {
    event.target.select();
  };

  const onHandleKeyDown = (event, index) => {
    const caracterAction = event.target;
    const currentUserKey = event.keyCode;
    const prevCaracter = inputRef[index - 1];
    const nextCaracter = inputRef[index + 1];

    if (
      (currentUserKey === 8 || currentUserKey === 46) &&
      caracterAction.value === ""
    ) {
      event.preventDefault();
      setCode(
        (prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1)
      );
      if (prevCaracter) {
        prevCaracter.current.focus();
      }
    }
  };
  const handlePaste = (e) => {
    const pastedCode = e.clipboardData.getData("text");
    if (pastedCode.length === 6) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef, index) => {
        inputRef.current.value = pastedCode.charAt(index);
      });
    }
  };

  return (
    <div className="window">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <input
          type="text"
          className="input"
          key={index}
          maxLength={1}
          ref={inputRef[index]}
          onChange={(event, index) => {
            handleCaptureCaracter(event, index);
          }}
          autoFocus={index === 0}
          onFocus={(event) => {
            onHandleFocus(event);
          }}
          onKeyDown={(event) => {
            onHandleKeyDown(event, index);
          }}
          onPaste={(e) => handlePaste(e)}
          disabled={isLoading}
        />
      ))}
    </div>
  );
}
