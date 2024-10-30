const baseURL = "https://nfl-api-data.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "6568ee9edbmsh0644457251a6d43p19b1bbjsncf1c083cc72d",
    "x-rapidapi-host": "nfl-api-data.p.rapidapi.com",
  },
};

async function getNFLTeams() {
  return fetch(`${baseURL}/nfl-team-list`, options)
    .then((res) => res.json())
    .then((res) => res);
}

async function getTeamSchedule(id) {
  return fetch(`${baseURL}/nfl-team-schedule?id=${id}`, options)
    .then((res) => res.json())
    .then((res) => res);
}

async function getTeamRoster(id) {
  return fetch(`${baseURL}/nfl-team-roster?id=${id}`, options)
    .then((res) => res.json())
    .then((res) => res);
}

export { getNFLTeams, getTeamSchedule, getTeamRoster };
