import statusesMock from './mocks/statuses';

export const getStatuses = () => new Promise((resolve) => {
    setTimeout(() => resolve(statusesMock.items), 1000);
});
