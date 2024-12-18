# name: Deployment Pipeline

# on:
#   push:
#     branches: [develop, pre-production, main]
#   pull_request:
#     branches: [develop, pre-production, main]
#     types: [opened, synchronize]

# jobs:

#   avoid_reduncy:
#     runs-on: ubuntu-18.04
#     steps:
#       - name: Cancel Previous Redundant Builds
#         uses: styfle/cancel-workflow-action@0.9.1
#         with:
#           access_token: ${{ github.token }}

#   lint:
#     runs-on: ubuntu-18.04
#     steps:
#       - uses: actions/checkout@v2
#         with:
#           fetch-depth: 0
#       - uses: actions/setup-node@v2
#         with:
#           cache: 'npm'
#           node-version: '16'
#       - name: Install dependencies
#         run: npm ci
#       - name: Lint
#         run: npm run predev
