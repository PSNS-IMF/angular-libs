## References

### Code

  * [Angular](https://angular.io/docs)
  * [Jest](https://jestjs.io/docs/en/getting-started)
  * [TSLint](https://palantir.github.io/tslint/)
  * [TypeScript](https://www.typescriptlang.org/docs/home.html)

### Packaging

  * [NPM Dev](https://docs.npmjs.com/misc/developers)
  * [NPM Publish](https://docs.npmjs.com/getting-started/publishing-npm-packages)
  * [Webpack](https://webpack.js.org/guides/author-libraries/#authoring-a-library)

### Misc

  * [Markdown](https://guides.github.com/features/mastering-markdown/#what)

### Publishing Steps
  * [Increment Package Version](https://docs.npmjs.com/cli/version)
    * `cd dist\angular-libs`
    * `npm version --no-git-tag-version patch`
  * `cd ..\..\`
  * `git tag -a v<version#> -m "tag annotation message"`
  * `git push && git push --tags`
  * `npm login`
  * `npm publish dist\angular-libs`