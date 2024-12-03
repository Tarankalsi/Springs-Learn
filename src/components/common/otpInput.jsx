import React, { useMemo } from "react";
import { regexConstant } from "../../constants";

/**
 * Renders an OTP input component.
 *
 * @param {Object} value - The current OTP value.
 * @param {number} valueLength - The length of the OTP value.
 * @param {Function} onChange - The callback function to handle value change.
 * @return {JSX.Element} The rendered OTP input component.
 */
const OtpInput = ({ value, valueLength, onChange }) => {
  /**
   * @param {string} value - The input value.
   * @param {number} valueLength - The length of the value.
   * @returns {string[]} - An array of items representing the digits from the value string.
   */
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items = [];
    Array.from({ length: valueLength }, (_, index) => {
      const char = valueArray[index];
      if (regexConstant.DIGIT_REGEX.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    });
    return items;
  }, [value, valueLength]);

  /**
   * Focuses on the next input element in a series of input elements.
   * @param {HTMLElement} target - The current input element.
   */
  const focusToNextInput = (target) => {
    // Get the next element sibling of the current input element
    const nextElementSibling = target.nextElementSibling;

    // If there is a next element sibling, focus on it
    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  /**
   * Focuses on the previous input element.
   * @param {HTMLElement} target - The current input element.
   */
  const focusToPrevInput = (target) => {
    // Get the previous element sibling of the target
    const previousElementSibling = target.previousElementSibling;

    // If there is a previous element sibling, focus on it
    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  /**
   * Handle the change event of an input element.
   *
   * @param {Object} event - The event object.
   * @param {number} idx - The index of the input element.
   */
  const inputOnChange = (event, index) => {
    const target = event.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = regexConstant.DIGIT_REGEX.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    const nextInputEl = target.nextElementSibling;

    // only delete digit if next input element has no value
    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, index) + targetValue + value.substring(index + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }
  };

  /**
   * Handle keydown event on input element.
   * @param {Event} event - The keydown event.
   */
  const inputOnKeyDown = (event) => {
    const { key } = event;
    const target = event.target;

    // If the arrow right or arrow down key is pressed,
    // prevent the default action and focus on the next input element.
    if (key === "ArrowRight" || key === "ArrowDown") {
      event.preventDefault();
      return focusToNextInput(target);
    }

    // If the arrow left or arrow up key is pressed,
    // prevent the default action and focus on the previous input element.
    if (key === "ArrowLeft" || key === "ArrowUp") {
      event.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;

    // Keep the selection range position
    // if the same digit was typed.
    target.setSelectionRange(0, targetValue.length);

    // If the backspace key is pressed and the target value is empty,
    // focus on the previous input element.
    if (event.key === "Backspace" && targetValue === "") {
      focusToPrevInput(target);
    }
  };
  /**
   * Handles the focus event of an input element.
   * If the previous input element does not have a value,
   * it sets the focus to the previous input element.
   * Otherwise, it selects the entire input value.
   * @param {Event} event - The focus event object.
   */
  const inputOnFocus = (event) => {
    const { target } = event;

    // Check if previous input element exists and has no value
    const prevInputEl = target.previousElementSibling;
    if (prevInputEl && prevInputEl.value === "") {
      // Set focus to previous input element
      return prevInputEl.focus();
    }

    // Select entire input value
    target.setSelectionRange(0, target.value.length);
  };
  return (
    <div className="mb-9 mt-[29px] flex items-center gap-[10px]">
      {valueItems !== undefined &&
        valueItems?.map((digit, index) => (
          <input
            key={index}
            maxLength={valueLength}
            value={digit}
            onChange={(event) => inputOnChange(event, index)}
            inputMode="numeric"
            pattern="\d{1}"
            type="password"
            autoComplete="off"
            onKeyDown={inputOnKeyDown}
            onFocus={inputOnFocus}
            className="relative flex h-15 w-10 rounded border border-[#C7C7C7] pb-1 text-center font-MontserratRegular text-ft48-16 outline-none"
          />
        ))}
    </div>
  );
};

export default OtpInput;
