import _ from 'lodash';

const headersContentType = {
    'content-type': 'application/json'
};

const handlerError = (error) => Promise.reject(error);

const fetchData = (url, params) => {
    const controller = new AbortController();
    const { headers, ...restParams } = params;
    const { signal } = controller;
    const start = async () => {
        try {
            const resp = await fetch(url, { ...restParams, headers: { ...headers, ...headersContentType }, signal });
            if (!resp.ok) return handlerError({ error: resp.statusText });
            const json = await resp.json();
            return _.cloneDeep(json);
        } catch (error) {
            return error.name !== 'AbortError' && handlerError({ error: error });
        }
    };
    return [start, controller];
};

export {
    handlerError,
    fetchData
};