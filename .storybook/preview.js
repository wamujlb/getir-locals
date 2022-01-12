export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Intro', 
        ['Get Started', 'Tech stack', 'Tests'], 
        'Components', 
        'Architecture', 
        ['Folder structure', 'Product results']
      ],
    },
  },
}
