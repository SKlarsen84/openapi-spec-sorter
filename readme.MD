# Sort OpenAPI Yml spec files


A simple command-line tool to sort OpenAPI specification files. It organizes the paths and components in alphabetical order, making your spec easier to navigate and maintain.

## Installation

Install the tool globally using npm:

```bash
npm install -g sort-openapi-spec
```

## Usage

To sort your OpenAPI spec file and overwrite the original:

```bash
sort-openapi <path_to_your_openapi_file.yml>
```

To sort your OpenAPI spec file and save the sorted version to a new file:
```bash
sort-openapi <path_to_your_openapi_file.yml> <output_file_path>
```
