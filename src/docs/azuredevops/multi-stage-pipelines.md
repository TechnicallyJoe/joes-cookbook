---
id: multi-stage-pipelines
title: Multi-Stage Pipelines
sidebar_label: Multi-Stage Pipelines
---

## build-test-staging-deploy

source: [build-test-staging-deploy.yml](https://github.com/MicrosoftDocs/pipelines-multistage/blob/master/build-test-staging-deploy.yml)

[![Preview](https://raw.githubusercontent.com/MicrosoftDocs/pipelines-multistage/master/res/build-test-staging-prod.png "Click to go to the pipeline examples")](https://dev.azure.com/azure-devops-yaml/multi-stage-samples/_build/latest?definitionId=1&branchName=master)

``` yml
# Only run against master
trigger:
  - master

# Don't run against PRs
pr: none

stages:
  - stage: build
    jobs:
      - job: run_build
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Build

  - stage: test
    dependsOn: build
    jobs:
      - job: run_tests
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Test

  - stage: staging
    dependsOn: test
    jobs:
      - job: deploy_staging
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Staging

  - stage: prod
    dependsOn: staging
    jobs:
      - job: deploy_prod
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Prod
```

## Fan-out-fan-in

source: [fan-out-fan-in.yml](https://github.com/MicrosoftDocs/pipelines-multistage/blob/master/build-test-staging-deploy.yml)

[![Preview](https://raw.githubusercontent.com/MicrosoftDocs/pipelines-multistage/master/res/fan-out-fan-in.png "Click to go to the pipeline examples")](https://dev.azure.com/azure-devops-yaml/multi-stage-samples/_build/latest?definitionId=5&branchName=master)

``` yml
# Only run against master
trigger:
  - master

# Don't run against PRs
pr: none

stages:
  - stage: build_test
    jobs:
      - job: build_test
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Build!

  - stage: deploy_east
    dependsOn: build_test
    jobs:
      - job: deploy_to_east
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Depoying East!

  - stage: deploy_west
    dependsOn: build_test
    jobs:
      - job: deploy_to_west
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Deploying West!

  - stage: prod_verify
    dependsOn:
      - deploy_east
      - deploy_west
    jobs:
      - job: verify
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Verifying deploys!
```
## Matrix

source: [matrix.yml](https://github.com/MicrosoftDocs/pipelines-multistage/blob/master/fan-in-fan-out.yml)

[![Preview](https://raw.githubusercontent.com/MicrosoftDocs/pipelines-multistage/master/res/matrix.png "Click to go to the pipeline examples")](https://dev.azure.com/azure-devops-yaml/multi-stage-samples/_build/latest?definitionId=3&branchName=master)

``` yml
# Only run against master
trigger:
  - master

# Don't run against PRs
pr: none

strategy:
  matrix:
    linux:
      imageName: 'ubuntu-16.04'
    mac:
      imageName: 'macos-10.13'
    windows:
      imageName: 'vs2017-win2016'

pool:
  vmImage: $(imageName)

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: '8.x'
  - script: echo Running $(imageName)
```

## Conditional

source: [conditional.yml](https://github.com/MicrosoftDocs/pipelines-multistage/blob/master/matrix.yml)

[![Preview](https://raw.githubusercontent.com/MicrosoftDocs/pipelines-multistage/master/res/conditional.png "Click to go to the pipeline examples")](https://dev.azure.com/azure-devops-yaml/multi-stage-samples/_build/latest?definitionId=2&branchName=master)

``` yml
# Only run against master
trigger:
  - master

# Don't run against PRs
pr: none

stages:
  - stage: build_test
    jobs:
      - job: build_test
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Build

  - stage: deploy
    dependsOn: build_test
    condition: eq(variables['Build.SourceBranch'], 'refs/heads/releases')
    jobs:
      - job: deploy_to_west
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Deploying West

  - stage: prod_verify
    dependsOn:
      - deploy
    jobs:
      - job: verify
        pool:
          vmImage: 'Ubuntu 16.04'
        steps:
          - script: echo Verifying deploy
```