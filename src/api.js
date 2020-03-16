import bridge from '@vkontakte/vk-bridge';
import statusesMock from './mocks/statuses';
import profileMock from './mocks/profile';

import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDF6hqmhuLqYjtd9lO4ojVXloDSAbNF_6E",
    authDomain: "vk-statuses.firebaseapp.com",
    databaseURL: "https://vk-statuses.firebaseio.com",
    projectId: "vk-statuses",
    storageBucket: "vk-statuses.appspot.com",
    messagingSenderId: "277163992480",
    appId: "1:277163992480:web:01ca896c9b2530f8fcf0c5",
    measurementId: "G-VTCTJ1EMP8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const APP_ID = 7356179;
export const API_VERSION = '5.103';
export const IS_DEV = window.location.href.indexOf('vk_app_id') === -1;

const getAccessToken = () => new Promise((resolve) => {
    bridge.send("VKWebAppGetAuthToken", {
        app_id: APP_ID,
        scope: 'status',
    })
        .then((response) => resolve(response.access_token))
        .catch(() => resolve("none"))
});

export const getStatuses = () => new Promise((resolve) => {
    if (IS_DEV) {
        return resolve(statusesMock.items);
    }

    firebase.firestore().collection("statuses").get()
        .then(async (refs) => {
            // Create basic structure
            const docs = [];
            refs.forEach((ref) => docs.push({ id: ref.id, ...ref.data() }));

            // Get profiles
            const profile_ids = docs.map((doc) => doc.owner_id);
            const profiles = await bridge.send("VKWebAppCallAPIMethod", {
                method: "users.get",
                params: {
                    user_ids: profile_ids.join(','),
                    v: API_VERSION,
                    access_token: await getAccessToken(),
                }
            }).then((response) => response.response.reduce((a,x) => ({ ...a, [x.id]: x }), {}));

            // Merge results
            const result = docs.map((doc) => ({ ...doc, owner: profiles[doc.owner_id] }));

            resolve(result);
        })
});

export const getProfile = () => new Promise((resolve) => {
    if (IS_DEV) {
        return resolve(profileMock);
    }

    bridge.send("VKWebAppGetUserInfo", {})
        .then(async (profile) => {
            const status = await bridge.send("VKWebAppCallAPIMethod", {
                method: "status.get",
                params: {
                    v: API_VERSION,
                    access_token: await getAccessToken(),
                }
            }).then((response) => response.response.text);

            resolve({ ...profile, status });
        });
});
