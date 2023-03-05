import axios from 'axios';

import { Playlist, SimplifiedPlaylist } from 'spotify-types';

export const getSimplifiedPlaylists = async () => {
  const result = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  return result.data.items as SimplifiedPlaylist[];
};

export const getPlaylist = async (id: string) => {
  const result = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  return result.data as Playlist;
};
