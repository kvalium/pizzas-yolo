import React from "react";

export default function ErrorPage({ title, message }) {
  return (
    <>
      <h1 className="title is-h1 has-text-centered is-italic">
        {title || "Une erreur est survenue"}
      </h1>
      {message && (
        <h2 className="is-size-3 has-text-centered is-italic">{message}</h2>
      )}
    </>
  );
}
