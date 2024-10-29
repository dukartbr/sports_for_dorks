import { colors } from "quasar";
import { defineStore } from "pinia";
import { setCssVar } from "quasar";

export const useTeamStore = defineStore("team", {
  state: () => ({
    selectedTeam: null,
  }),

  actions: {
    setTeam(team) {
      this.selectedTeam = team;

      // SET TEAM COLORS
      const { luminosity, lighten } = colors;
      setCssVar("primary", `#${team.color}`);
      // ensures we don't blend font/backgroundcolor
      if (luminosity(`#${team.alternateColor}`) > 0.55) {
        const inv = (1 - luminosity(`#${team.alternateColor}`)) * 100;
        setCssVar("secondary", `${lighten(team.alternateColor, -inv)}`);
      } else {
        setCssVar("secondary", `#${team.alternateColor}`);
      }
    },
  },
});
