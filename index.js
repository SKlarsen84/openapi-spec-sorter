#!/usr/bin/env node
const fs = require('fs')
const yaml = require('js-yaml')

function sortObjectByKeys(unsortedObject) {
  return Object.keys(unsortedObject)
    .sort()
    .reduce((acc, key) => {
      acc[key] = unsortedObject[key]
      return acc
    }, {})
}

function sortOpenApiFile(inputFilePath, outputFilePath = inputFilePath) {
  try {
    const fileContents = fs.readFileSync(inputFilePath, 'utf8')
    const data = yaml.load(fileContents)

    if (data.paths) {
      data.paths = sortObjectByKeys(data.paths)
    }

    if (data.components && data.components.schemas) {
      data.components.schemas = sortObjectByKeys(data.components.schemas)
    }

    const newYaml = yaml.dump(data, { lineWidth: -1 })
    fs.writeFileSync(outputFilePath, newYaml, 'utf8')
    console.log(`Sorted OpenAPI spec saved to ${outputFilePath}`)
  } catch (e) {
    console.error(e)
  }
}

const [inputFilePath, outputFilePath] = process.argv.slice(2)
if (!inputFilePath) {
  console.error('Usage: sort-openapi <path_to_your_openapi_file.yml> [output_file_path]')
  process.exit(1)
}

sortOpenApiFile(inputFilePath, outputFilePath)
