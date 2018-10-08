/*! Copyright (c) 2018 Siemens AG. Licensed under the MIT License. */

// Typedoc options (execute "typedoc" in node_modules/.bin)

module.exports = {

    // Specifies the output mode the project is used to be compiled with: "file" or "modules"
    mode: "file",

    // Should TypeDoc disable the automatic testing and cleaning of the output directory?
    disableOutputCheck: true,

    // Define a (minimatch glob) pattern for excluded files when specifying paths.
    exclude: "test/**/*.ts",

    // Prevent externally resolved TypeScript files from being documented.
    excludeExternals: false,

    // Prevent symbols that are not exported from being documented.
    excludeNotExported: true,

    // Prevent private members from being included in the generated documentation.
    excludePrivate: true,

    // Turn on parsing of .d.ts declaration files.
    includeDeclarations: false,

    // Specifies the location to look for included documents.
    // Use [[include:FILENAME]] in comments.
    includes: "./",

    // Should TypeDoc generate documentation pages even after the compiler has returned errors?
    ignoreCompilerErrors: true,

    // Set the name of the project that will be used in the header of the template.
    name: "<auto-generated>",

    readme: "./README.md",

    // Specifies the location the documentation should be written to.
    out: "docs/code/",

    // Path to source files
    src: "src/",

    // Specify the logger that should be used, "none" or "console".
    // Set to "console" for debugging
    logger: "none",

    // Set to true for debugging (in combination wth logger: "console")
    verbose: false,

};