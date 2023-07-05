import axios from 'axios';

export const signUp = async (firstName, lastName, email, password) => {
    let response = await axios.post('/signup/', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    });
    return response.data.success;
};

export const logIn = async (email, password) => {
    let response = await axios.post('/login', {
        email: email,
        password: password,
    });
    console.log(response.data.login);
    if (response.data.login) {
        return response.data.user;
    } else {
        return null;
    }
};

export const currUser = async (setUser) => {
    let response = await axios.get('/curruser/');
    setUser(response.data);
    console.log(response.data);
    return response.data;
};

export const logOut = async (setUser, navigate) => {
    let response = await axios.post('/logout/');
    setUser(null);
    navigate('/signin');
    return response.data.logout;
};

export const getToken = () => {
    // GETS CSRF TOKEN FROM THE WORKING DOCUMENT
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === name + '=') {
                    cookieValue = decodeURIComponent(
                        cookie.substring(name.length + 1)
                    );
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');
    // SETS CSRFTOKEN TO AXIOS HEADERS
    axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
};