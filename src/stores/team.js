import { colors } from "quasar";
import { defineStore } from "pinia";
import { setCssVar } from "quasar";

export const useTeamStore = defineStore("team", {
  state: () => ({
    // selectedTeam: localStorage.getItem("sports4DorksSelectedTeam")
    //   ? JSON.parse(localStorage.getItem("sports4DorksSelectedTeam"))
    //   : null,
    selectedTeam: null,
  }),

  actions: {
    setTeam(team) {
      const { luminosity, lighten } = colors;
      this.selectedTeam = team;
      // localStorage.setItem("sports4DorksSelectedTeam", JSON.stringify(team));
      // SET TEAM COLORS
      setCssVar("primary", `#${team.color}`);
      // ensures we don't blend font/backgroundcolor
      if (luminosity(`#${team.alternateColor}`) > 0.65) {
        const inv = (1.25 - luminosity(`#${team.alternateColor}`)) * 100;
        setCssVar("secondary", `${lighten(team.alternateColor, -inv)}`);
      } else {
        setCssVar("secondary", `#${team.alternateColor}`);
      }
    },
  },
});
