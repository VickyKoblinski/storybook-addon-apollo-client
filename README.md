# Storybook Addon Apollo Client

Use Apollo Client in your Storybook stories.

## Versions

- If you're using Apollo Client 2.x and Storybook 5.x use version 1.x
- If you're using Apollo Client 2.x and Storybook 6.x use version 2.x
- If you're using Apollo Client 3.x and Storybook 6.x use version 3.x

## Install

**yarn**
```
yarn add --dev storybook-addon-apollo-client
```

**npm**

```
npm install -D storybook-addon-apollo-client
```

**babel**

You must have `babel-plugin-graphql-tag` installed due to this issue: https://github.com/graphql/graphql-js/pull/2864

if you don't use babel, you can create a `.storybook/.babelrc` like so:

```json
{
  "plugins": ["graphql-tag"]
}
```

Add the addon to your configuration in `.storybook/main.js`
```
module.exports = {
  ...config,
  addons: [
    ...your addons
    "storybook-addon-apollo-client",
  ],
};
```


add the following to your `.storybook/preview.js`

```js
import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+
// import { MockedProvider } from "@apollo/react-testing"; // Use for Apollo Version < 3


export const parameters = {
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
};
```

## Upgrading from a previous version

In previous versions, we had a decorator called `withApolloClient` this is no longer nesscessary. If you're upgrading from this API here are the following changes that you'll need to make:

1. remove all code referencing the deprecated withApolloClient decorator.
2. follow install instructions

## Writing your stories with queries

```jsx
import MyComponentThatHasAQuery, {
  MyQuery,
} from '../component-that-has-a-query';

export default {
  title: 'My Story',
};

export const example = () => <MyComponentThatHasAQuery />;

example.parameters = {
  apolloClient: {
    // do not put MockedProvider here, you can, but its preferred to do it in preview.js
    mocks: [
      { request: { query: MyQuery }, result: { data: { viewer: null } } },
    ],
  },
};
```

Read more about the options available for MockedProvider at https://www.apollographql.com/docs/react/development-testing/testing

### Usage
In Storybook, click "Show Addons" and navigate to the "Apollo Client" tab.

![Addon UI Preview](preview.png)

## Example App

To see real world usage of how to use this addon, check out the example app:

https://github.com/lifeiscontent/realworld
