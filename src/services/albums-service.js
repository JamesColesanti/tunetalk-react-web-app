import axios from 'axios';

export const findAlbums = async (searchTerm) => {

    const bearerTokenResponseData = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
            grant_type: 'client_credentials',
            client_id: '428147ec52be42138c11e229e16d6c0b',
            client_secret: '1b8d85e6cb1c4aa0bc47458d581dc79d',
        },
        {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        }
    );

    const access_token = bearerTokenResponseData['data']['access_token'];

    const url = 'https://api.spotify.com/v1/search?q=' + searchTerm 
        + '&type=album&limit=5';

    const response = await axios.get(url,
        {
            headers: {
                Authorization: "Bearer " + access_token,
            },
        }
    );
    return response.data.albums.items;
}

export const findAlbumById = async (albumId) => {

    const bearerTokenResponseData = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
            grant_type: 'client_credentials',
            client_id: '428147ec52be42138c11e229e16d6c0b',
            client_secret: '1b8d85e6cb1c4aa0bc47458d581dc79d',
        },
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    const access_token = bearerTokenResponseData['data']['access_token'];

    const url = 'https://api.spotify.com/v1/albums/' + albumId;
    const url2 = 'https://api.spotify.com/v1/albums/' + albumId + '/tracks';

    const response = await axios.get(url,
        {
            headers: {
                Authorization: "Bearer " + access_token,
            }
        }
    );

    const response2 = await axios.get(url2,
        {
            headers: {
                Authorization: "Bearer " + access_token,
            }
        }
    );

    return {
        albumInfo: response.data,
        tracks: response2.data.items,
    }
}
