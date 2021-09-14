# common

# Publishing

It's easiest to just publish by tagging.

```bash
npm run build

npm run tag:dryRun # a dry run: make sure you increment the version!
npm run tag # to actually run it
```

And then include the following in `dependencies` of a `package.json` file:

```
"@globalunderdog/common": "https://github.com/GlobalUnderdog/common#1.3.0",
```
