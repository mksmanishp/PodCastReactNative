module.exports = {
  assets: ['./src/assets/fonts'],
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx', 'js', 'jsx', 'json'];
  },
};
