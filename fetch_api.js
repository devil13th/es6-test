let API = '';
if (window.REACT_APP_CONFIG) {
  API = window.REACT_APP_CONFIG.sso_api;
}

function headers() {
  const token = localStorage.getItem('token');

  return {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'token': token,
  };
}

function formHeaders() {
  const token = localStorage.getItem('token');
  return {
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${token}`,
    'token': token,
  };
}

function parseResponse(response) {
  return response.json().then((json) => {
    if (json.status === 401) {
      if (window.REACT_APP_CONFIG.contextPath) {
        window.location.href = window.REACT_APP_CONFIG.contextPath.concat('/logout');
      }
    }
    // if (!response.ok) {
    //   return Promise.reject(json);
    // }
    // if (json.code === 401) {
    //   return Promise.reject(json);
    // }
    // if (json.code === 500) {
    //   return Promise.reject(json);
    // }
    // if (json.code === 400) {
    //   return Promise.reject(json);
    // }
    return json;
  });
}

function queryString(params) {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

export default {
  fetch(url, params = {}) {
    // params.token = localStorage.getItem('token');
    return fetch(`${url}${queryString(params)}`, {
      method: 'GET',
      headers: headers(),

      credentials: 'include',
    })
      .then(parseResponse);
  },

  post(url, data) {
    // data.token = localStorage.getItem('token');
    const body = JSON.stringify(data);

    return fetch(`${API}/${url}`, {
      method: 'POST',
      headers: headers(),
      credentials: 'include',
      body,
    })
      .then(parseResponse);
  },

  postForm(url, formData) {
    return fetch(`${API}/${url}`, {
      method: 'POST',
      headers: formHeaders(),
      credentials: 'include',
      body: formData,
    })
      .then(parseResponse);
  },

  patch(url, data) {
    // data.token = localStorage.getItem('token');
    const body = JSON.stringify(data);

    return fetch(`${API}/${url}`, {
      method: 'PATCH',
      headers: headers(),

      credentials: 'include',
      body,
    })
      .then(parseResponse);
  },

  delete(url) {
    return fetch(`${API}/${url}`, {
      method: 'DELETE',
      headers: headers(),
      credentials: 'include',
    })
      .then(parseResponse);
  },
};
