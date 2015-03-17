/// <reference path="fourslash.ts" />

// @allowNonTsExtensions: true
// @Filename: a.tsjs
//// function F(): number { }

verify.getSemanticDiagnostics(`[
  {
    "message": "'types' can only be used in TypeScript.",
    "start": 14,
    "length": 6,
    "category": "error",
    "code": 8010
  }
]`);