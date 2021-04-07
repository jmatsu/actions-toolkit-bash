# actions-toolkit-in-bash

Bash scripts for workflow commands for use in GitHub Actions.

ref: https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions

# Usage

All commands can accept the value through the pipe as it's passed via the last argument.

The behaviors are based on [@actions/core](https://github.com/actions/toolkit/tree/main/packages/core) as much as possible. [.github/workflows/test-*](.github/workflows) will be your help to understand how scripts work.

## add-path `<path>`

https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#adding-a-system-path

## start-group `<group name>` / end-group

https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#grouping-log-lines

## log-\<level> `<message>`

level: debug, warning, error

- https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-a-debug-message
- https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-a-warning-message
- https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-a-error-message

## stop-commands `<token>` / resume-commands `<token>`

https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#stopping-and-starting-workflow-commands

## set-env `<name>` `<value>`

alias: export-env

> <name> is required even when using the pipe

https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-environment-variable

## set-output `<name>` `<value>`

> <name> is required even when using the pipe

https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter

## set-secret `<value>`

alias: add-mask

https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#masking-a-value-in-log

# Known limitation

## EOL at EOF will be ignored by default

Please be careful when using file contents for set-env and/or set-output. `INCLUDE_EOL_AT_EOF=0` sets EOL at EOF anyway.

## save-state is missing

It seems only JavaScript actions can use save-state commands.

- https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-javascript-actions

> The save-state command can only be run within an action, and is not available to YAML files. The saved value is stored as an environment value with the STATE_ prefix.

# License

Under the [MIT](LICENSE) License. 

# Release

- Tag and push `1.x.y`
- Wait for attaching files from GitHub Actions
- Publish the new release to complete
- Tweak [setup-actions-toolkit](https://github.com/jmatsu/setup-actions-toolkit) to use the latest version
