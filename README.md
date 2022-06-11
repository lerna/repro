# lerna/repro

This repository is intended to be used to reproduce issues with the latest version of lerna.

Please fork this repository (https://github.com/lerna/repro) and apply any changes you need to (such as adding packages/scripts/etc) and then open a PR back into the same repository (it won't be merged, so doesn't need to be perfect).

Please include any additional instructions in the PR description, such as commands to run etc, and then reference the PR you have created in a bug report on the main repository:

https://github.com/lerna/lerna


## Repo details

This is a reproducer for https://github.com/lerna/lerna/issues/2060

To reproduce:
 1. `npm i`
 1. `npx lerna publish --canary`

Notice that lerna only wants to publish `app => 1.0.1-alpha.2`, which will have a dependency on `library@1.0.0`.
This will result in a broken version of `app` being published as it depends on the unpublished change to library in commit `0639f4a`.
