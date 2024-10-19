const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
  name: { type: String, required: true },
  abbreviatedName: { type: String, required: true },
  logo: { type: String }, // path to the logo .svg file
});

const leagueSchema = new Schema({
  name: { type: String, required: true },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
});

const Team = model('Team', teamSchema);
const League = model('League', leagueSchema);

module.exports = { Team, League };