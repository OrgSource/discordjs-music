const mongoose = require('mongoose');

const TicketUserSchema = new mongoose.Schema({
    userID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    ticketChannelID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    ticketExtraMembers: {
        type: mongoose.SchemaTypes.Array,
        required: false,
    },
}, { strict: false });

module.exports = mongoose.model('TicketUser', TicketUserSchema);

const TicketGuildSchema = new mongoose.Schema({
    guildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    guildTicketCounter: {
        type: mongoose.SchemaTypes.Number,
        required: false,
    },
    guildTicketParentCategoryID: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
    guildTicketSupportRoleID: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
    guildTicketLogChannelID: {
        type: mongoose.SchemaTypes.String,
        required: false,
    },
}, { strict: false });

module.exports = mongoose.model('TicketGuild', TicketGuildSchema);