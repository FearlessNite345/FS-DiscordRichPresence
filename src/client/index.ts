import { delay } from "@whitigol/fivem-utils"
import { config } from "@/util/config"

let playerCount = 0

setTick(async () => {
    if (!config.discordAppID) {
        throw new Error("Discord App ID is required.");
    }
    if (!config.richPresenceLogoName) {
        throw new Error("Rich Presence logo name is required.");
    }

    SetDiscordAppId(config.discordAppID);
    SetDiscordRichPresenceAsset(config.richPresenceLogoName);

    if (config.smallRichPresenceLogoName) {
        SetDiscordRichPresenceAssetSmall(config.smallRichPresenceLogoName);
    }

    if (config.buttonLink) {
        SetDiscordRichPresenceAction(0, config.buttonText, config.buttonLink);
    }

    while (true) {
        if (playerCount <= 0) {
            SetRichPresence(`Waiting on ${config.serverNameAbbr} player count.`);
        } else if (playerCount === 1) {
            SetRichPresence(`Exploring ${config.serverNameAbbr} with ${playerCount} player.`);
        } else {
            SetRichPresence(`Exploring ${config.serverNameAbbr} with ${playerCount} players.`);
        }
        

		await delay(config.updateRateInSeconds * 1000)
    }
})

onNet('FS-DRP:receivePlayerCount', (newPlayerCount: number) => {
    playerCount = newPlayerCount
})