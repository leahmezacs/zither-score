/* eslint-disable react/display-name */
import React from "react";
import { Button, Spinner } from "react-bootstrap";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Spinner animation="border" variant="primary" className="spinning" />}
    {!isLoading ? text : loadingText}
  </Button>;