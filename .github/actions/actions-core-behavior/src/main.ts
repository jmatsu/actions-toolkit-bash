import * as core from '@actions/core'

import * as fs from 'fs'

async function run(): Promise<void> {
  try {
    const single_line_txt =
      core.getInput('single_line_file_path')
    const single_line_wo_newline_txt =
      core.getInput('single_line_wo_newline_file_path')
    const multiple_lines_txt =
      core.getInput('multiple_lines_file_path')
    const multiple_lines_wo_newline_txt =
      core.getInput('multiple_lines_wo_newline_file_path')

      const singleLine = fs.readFileSync(single_line_txt).toString("utf8")
      const singleLineWoNewLine = fs.readFileSync(single_line_wo_newline_txt).toString("utf8")
      const multipleLines = fs.readFileSync(multiple_lines_txt).toString("utf8")
      const multipleLinesWoNewLine = fs.readFileSync(multiple_lines_wo_newline_txt).toString("utf8")
    
    core.exportVariable('single-line', singleLine)
    core.exportVariable('single-line-wo-newline', singleLineWoNewLine)
    core.exportVariable('multiple-lines', multipleLines)
    core.exportVariable('multiple-lines-wo-newline', multipleLinesWoNewLine)

    core.setOutput('single-line', singleLine)
    core.setOutput('single-line-wo-newline', singleLineWoNewLine)
    core.setOutput('multiple-lines', multipleLines)
    core.setOutput('multiple-lines-wo-newline', multipleLinesWoNewLine)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
