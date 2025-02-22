fx_version 'cerulean'
game 'gta5'

author 'FearlessStudios'
description 'FS-DiscordRichPresence by FearlessStudios'
version '1.0.1'

client_script 'dist/client/**/*.js'
server_script 'dist/server/**/*.js'

files {
    'nui/**/*',
    'stream/**/*',
    'data/**/*',
    'config.json'
}

data_file 'DLC_ITYP_REQUEST' 'stream/**/*.ytyp'

dependencies {
    'FS-Lib'
}
