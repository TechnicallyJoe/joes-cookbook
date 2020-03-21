---
id: pipeline-linting
title: Pipeline Linting
sidebar_label: Pipeline Linting
---

## YAML

yamllint uses a file named [.yamllint](https://yamllint.readthedocs.io/en/stable/configuration.html) to customize its rules.

source: [yamllint](https://github.com/adrienverge/yamllint)

``` yml
- job: yamllint
  pool:
    vmImage: 'ubuntu-latest'
  steps:
    - script: sudo apt-get install yamllint -y && yamllint --version
      displayName: Installing yamllint

    - script: yamllint .
      displayName: Running yamllint
```

## Markdown

yamllint uses a file named .mdlrc to customize its rules.

source: [mdl](https://github.com/markdownlint/markdownlint)

``` yml
- job: markdownlint
  pool:
    vmImage: 'ubuntu-latest'
  steps:
    - task: UseRubyVersion@0
      inputs:
        versionSpec: '>= 2.7'

    - script: gem install mdl && mdl --version
      displayName: 'Install markdown lint'

    - script: mdl . --config .mdlrc
      displayName: 'Run markdown lint'

```
