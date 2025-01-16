export default {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: ['@storybook/addon-essentials', 'storybook-addon-rslib'],
    framework: 'storybook-react-rsbuild',
    rsbuildFinal: (config) => {
        config.output ??= {}
        config.output.assetPrefix = (process.env.BASE_PATH || '') + '/'
        // Customize the final Rsbuild config here
        return config
    },
};