import { delay } from "@whitigol/fivem-utils"
import { config } from "@/util/config"

setTick(async () => {
    while (true) {
        emitNet('FS-DRP:receivePlayerCount', -1, GetNumPlayerIndices())

        await delay((config.updateRateInSeconds * 1000) / 2)
    }
})

exports['FS-Lib'].VersionCheck('FS-DiscordRichPresence', 'fearlessnite345/FS-DiscordRichPresence')