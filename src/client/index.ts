import { delay } from "@whitigol/fivem-utils"
import { config } from "@/util/config"

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
        let playerCount = NetworkGetNumConnectedPlayers()

        if (playerCount <=1) {
            SetRichPresence(`Exploring the city with ${NetworkGetNumConnectedPlayers()} player`);
        } else {
            SetRichPresence(`Exploring the city with ${NetworkGetNumConnectedPlayers()} players`);
        }
        

		await delay(config.updateRate)
    }
})