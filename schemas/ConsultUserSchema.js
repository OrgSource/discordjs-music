const mongoose = require('mongoose');

const ConsultUserSchema = new mongoose.Schema({
    userID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    consultChannelID: {
        type: mongoose.SchemaTypes.String,
    },
    consultExtraMembers: {
        type: mongoose.SchemaTypes.Array,
    },
}, { strict: false });

module.exports = mongoose.model('ConsultUser', ConsultUserSchema);