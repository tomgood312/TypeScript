/// <reference path="fourslash.ts" />

// @allowNonTsExtensions: true
// @Filename: a.tsjs
//// class C { v }

verify.getSemanticDiagnostics(`[
  {
    "message": "'property declarations' can only be used in TypeScript.",
    "start": 10,
    "length": 1,
    "category": "error",
    "code": 8014
  }
]`);