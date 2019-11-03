import { Did } from "./entities";
import DidDocument = Did.Document;
import { verifyDocument } from "./verify";

describe("DID tests", () => {
  test("Should return error if DidDocument does not include a context property", () => {
    const emptyTypeDoc: DidDocument = { context: "", id: "someId" };
    expect(verifyDocument(emptyTypeDoc)).toStrictEqual({
      valid: false,
      errorMessage: "Context must be given"
    });
  });

  test("Should return success if DidDocument includes a context property", () => {
    const emptyTypeDoc: DidDocument = { context: "someContext", id: "someId" };
    expect(verifyDocument(emptyTypeDoc)).toStrictEqual({
      valid: true
    });
  });


});
