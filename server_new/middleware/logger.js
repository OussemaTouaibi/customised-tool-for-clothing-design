const {
    createLogger,
    transports,
    format
} = require('winston');

const logger = createLogger ({
    transports: [
        new transports.File({
            filename:'emerg.log',
            level: 'emerg',
            format : format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename:'alert.log',
            level: 'alert',
            format : format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename:'crit.log',
            level: 'crit',
            format : format.combine(format.timestamp(), format.json())
        }),
        new transports.Console({
            level: 'error',
            format : format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename:'warning.log',
            level: 'warning',
            format : format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename:'notice.log',
            level: 'notice',
            format : format.combine(format.timestamp(), format.json())
        }),
        new transports.Console({
            level: 'info',
            format : format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename:'debug.log',
            level: 'debug',
            format : format.combine(format.timestamp(), format.json())
        }),
        
    ]
})

module.exports = logger;