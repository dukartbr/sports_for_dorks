const baseURL = "https://nfl-api-data.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "6568ee9edbmsh0644457251a6d43p19b1bbjsncf1c083cc72d",
    "x-rapidapi-host": "nfl-api-data.p.rapidapi.com",
  },
};

function getNFLTeams() {
  return fetch(`${baseURL}/nfl-team-list`, options)
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
      return res;
    });
}

function getTeamSchedule(id) {
  return fetch(`${baseURL}/nfl-team-schedule?id=${id}`, options)
    .then((res) => res.json())
    .then((res) => {
      console.log("schedule", res);
      return res;
    });
}

export { getNFLTeams, getTeamSchedule };
