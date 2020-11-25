export const initialState = {
  currentUser: null,
  viewOldEvents: false,
  events: {
    data: [],
    saving: false,
    openModal: false,
  },
  eventToAdd: {
    name: '',
    dateOfEvent: new Date(),
  },
  round: {
    event: '',
    selectedRound: 0,
    saving: false,
    roundId: '',
    nameChanged: false,
  },
  roundToAdd: {
    name: '',
    categories: [],
    participants: [{ team: '', answered: [], failed: [] }],
    questionBank: {},
    errorName: false,
    errorCategories: false,
    errorTeams: false,
  },
  game: {
    teams: [],
    saving: false,
    questions: [],
    timer: 15,
    answers: [],
    published: false,
    questionIndex: -1,
    roomId: '',
    title: '',
  },
  questions: {
    data: [],
    allCategories: [],
    saving: false,
    editing: false,
    //nameChanged is needed to prevent a 409 error when updating a question
    nameChanged: false,
  },
  questionToAdd: {
    name: '',
    categories: [],
    points: 100,
    errorName: false,
    errorCategories: false,
    errorPoints: false,
  },
  teams: {
    data: [],
    allResidents: [],
    allMedicalCenters: [],
    saving: false,
    editing: false,
    //teamNameChanged is needed to prevent a 409 error when updating a team name
    teamNameChanged: false,
  },
  teamToAdd: {
    name: '',
    residents: [],
    medicalCenter: '',
    errorName: false,
    errorResidents: false,
    errorMedicalCenter: false,
  },
  admins: {
    data: [],
    saving: false,
  },
  adminToAdd: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    allAccess: false,
    errorFirstName: false,
    errorLastName: false,
    errorEmail: false,
    errorPassword: false,
    errorConfirm: false,
  },
};
