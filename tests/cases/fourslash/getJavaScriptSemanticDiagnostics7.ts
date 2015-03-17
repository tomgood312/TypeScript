/// <reference path="fourslash.ts" />

// @allowNonTsExtensions: true
// @Filename: a.tsjs
//// module M { }

verify.getSemanticDiagnostics(`[
  {
    "message": "'module declarations' can only be used in TypeScript.",
    "start": 7,
    "length": 1,
    "category": "error",
    "code": 8007
  }
]`);