// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     use: [
//       {
//         loader: require.resolve('awesome-typescript-loader'),
//       },
//       // Optional
//       {
//         loader: require.resolve('react-docgen-typescript-loader'),
//       },
//     ],
//   });
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };

// module.exports = ({ config, mode }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve('babel-loader'),
//     options: {
//       presets: [['react-app', { flow: false, typescript: true }]],
//     },
//   });
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };

const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');
//dont need stories path if you have your stories inside your
//components folder
module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './.storybook/tsconfig.json'
          }
        },
        { loader: require.resolve('react-docgen-typescript-loader') }
      ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};