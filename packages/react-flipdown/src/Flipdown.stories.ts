import { Flipdown } from '../src/Flipdown';

const meta = {
    title: 'Example/Flipdown',
    component: Flipdown,
};

export default meta;

export const Primary = {
    args: {
        // Unix timestamp (in seconds) to count down to
        epoch: (new Date().getTime() / 1000) + (86400 * 2) + 1
    },
};