export const setCurrentUser = user => ({ type: 'SET_CURRENT_USER', user });

export const setEvents = events => ({ type: 'SET_EVENTS', events });

export const addEvent = event => ({ type: 'ADD_EVENT', event });

export const clearEventFields = () => ({ type: 'CLEAR_EVENT_FIELDS' });

export const setRoundAttributes = attributes => ({
  type: 'SET_ROUND_ATTRIBUTES',
  round: attributes,
});

export const addRound = round => ({ type: 'ADD_ROUND', round });

export const clearRoundFields = () => ({ type: 'CLEAR_ROUND_FIELDS' });

export const setGame = attributes => ({ type: 'SET_GAME', game: attributes });

export const clearGame = () => ({ type: 'CLEAR_GAME' });

export const viewOldEvents = status => ({ type: 'VIEW_OLD_EVENTS', status });

export const setQuestionsAttributes = questions => ({
  type: 'SET_QUESTIONS',
  questions,
});

export const addQuestion = question => ({ type: 'ADD_QUESTION', question });

export const clearQuestionForm = () => ({ type: 'CLEAR_QUESTION_FORM' });

export const setTeams = teams => ({ type: 'SET_TEAMS', teams });

export const addTeam = team => ({ type: 'ADD_TEAM', team });

export const clearTeamForm = () => ({ type: 'CLEAR_TEAM_FORM' });

export const setAdmins = admins => ({ type: 'SET_ADMINS', admins });

export const addAdmin = admin => ({ type: 'ADD_ADMIN', admin });

export const clearAdminForm = () => ({ type: 'CLEAR_ADMIN_FORM' });
