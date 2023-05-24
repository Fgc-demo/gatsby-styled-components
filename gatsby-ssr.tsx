import * as React from "react";
import { renderToString } from "react-dom/server";
import inline from "glamor-inline";

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const bodyHTML = renderToString(bodyComponent);
  const inlinedHTML = inline(bodyHTML);

  replaceBodyHTMLString(inlinedHTML);
};
