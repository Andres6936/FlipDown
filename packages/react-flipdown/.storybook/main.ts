export default {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: ['@storybook/addon-essentials', 'storybook-addon-rslib'],
    framework: 'storybook-react-rsbuild',
};