import bridge from '@vkontakte/vk-bridge';
import statusesMock from './mocks/statuses';
import profileMock from './mocks/profile';

export const APP_ID = 7356179;
export const API_VERSION = '5.103';
export const IS_DEV = window.location.href.indexOf('vk_app_id') === -1;

export const getStatuses = () => new Promise((resolve) => {
    setTimeout(() => resolve(statusesMock.items), 1000);
});

export const getProfile = () => new Promise((resolve) => {
    if (IS_DEV) {
        return resolve(profileMock);
    }

    bridge.send("VKWebAppGetUserInfo", {})
        .then(async (profile) => {
            const access_token = await bridge.send("VKWebAppGetAuthToken", {
                app_id: APP_ID,
                scope: 'status',
            }).then((response) => response.access_token);

            const status = await bridge.send("VKWebAppCallAPIMethod", {
                method: "status.get",
                params: {
                    v: API_VERSION,
                    access_token,
                }
            }).then((response) => response.response.text);

            resolve({ ...profile, status });
        });
});
