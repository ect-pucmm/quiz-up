import axios from 'axios';

import { URL_TEAMS } from '../config/urls';

export const getTeams = async () => {
  try {
    const response = await axios.get(`${URL_TEAMS}/`);

    return { data: response.data.teams, error: null };
  } catch (error) {
    return { data: null, error };
  }
};