const baseURL = "https://nfl-api-data.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "6568ee9edbmsh0644457251a6d43p19b1bbjsncf1c083cc72d",
    "x-rapidapi-host": "nfl-api-data.p.rapidapi.com",
  },
};

export async function getNFLTeams() {
  const response = await fetch(`${baseURL}/nfl-team-list`, options);
  return response.json();
}

export async function getTeamSchedule(id) {
  const response = await fetch(
    `${baseURL}/nfl-team-schedule?id=${id}`,
    options
  );
  return response.json();
}

export async function getTeamRoster(id) {
  const response = await fetch(`${baseURL}/nfl-team-roster?id=${id}`, options);
  return response.json();
}

export async function getTeamNews(id) {
  const response = await fetch(`${baseURL}/nfl-team-news?id=${id}`, options);
  return response.json();
}

export async function getTeamStats(id, year) {
  const response = await fetch(
    `${baseURL}/nfl-team-statistics?year=${year}&id=${id}`,
    options
  );
  return response.json();
}

export async function getTeamRecords(id, year) {
  const response = await fetch(
    `${baseURL}/nfl-team-record?id=${id}&year=${year}`,
    options
  );
  return response.json();
}
