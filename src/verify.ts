import { Did } from "./entities";
import Document = Did.Document;
import Result = Did.Result;

export const verifyDocument = (
  document: Document
): Result => {
  if (!document.context) {
    return { valid: false, errorMessage: "Context must be given" };
  }

  return { valid: true };
};
