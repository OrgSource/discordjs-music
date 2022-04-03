const mongoose = require('mongoose');

const ConsultGuildSchema = new mongoose.Schema({
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    guildConsultCounter: {
        type: mongoose.SchemaTypes.Number,
        required: false,
    },
    guildConsultParentCategoryID: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
    guildConsultSupportRoleID: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
    guildConsultLogChannelID: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
}, { strict: false });

module.exports = mongoose.model('ConsultGuild', ConsultGuildSchema);