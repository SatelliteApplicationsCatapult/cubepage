import { useForm } from "react-cool-form";

import { CircularProgress, Alert } from "@mui/material";

import { requestToken } from "../../utils/token";
import Field from "../form/Field";
import { useState } from "react";

const checkError = (search) => {
  let errorMsgs = {
    "token-expired": "Your session has expired. Please login again.",
  };
  if (search) {
    if (search.includes("error=")) {
      let error = search.split("error=")[1];
      if (errorMsgs[error]) {
        return errorMsgs[error];
      }
    }
  }
  return null;
};

const LoginForm = () => {
  const [error, setError] = useState(checkError(window.location.search));
  const [showLoading, setShowLoading] = useState(false);

  const { form, use } = useForm({
    defaultValues: { name: "", pass: "" },

    onSubmit: (values) => {
      setShowLoading(true);
      requestToken(values.name, values.pass, setError).then((response) => {
        if (response === 200) {
          window.location.href = "/tasks";
        } else {
          setShowLoading(false);
        }
      });
    },
  });

  const errors = use("errors", { errorWithTouched: true });

  return (
    <>
      {error && (
        <div className={"alert" + (showLoading ? " hide" : "")}>
          <Alert severity="error">Error — {error}</Alert>
        </div>
      )}

      <form
        autoComplete="off"
        ref={form}
        className={`loginform` + (showLoading ? " hide" : "")}
      >
        <div className="form-row">
          <Field
            label="Username"
            id="name"
            name="name"
            placeholder="Username"
            required
            minLength={4}
            error={errors.username}
          />
        </div>
        <div className="form-row">
          <Field
            label="Password"
            id="pass"
            name="pass"
            placeholder="Password"
            type="password"
            required
            minLength={6}
            error={errors.password}
          />
          <div className="forgotten-password">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://projects.csopenportal.co.uk/forgotten-password"
            >
              Forgotten password?
            </a>
          </div>
        </div>
        <div className="form-row">
          <input type="submit" value="Login" className="button__hover" />
        </div>
      </form>
      <div className="form-row circularProgress">
        {showLoading && <CircularProgress />}
      </div>
    </>
  );
};

export default LoginForm;
