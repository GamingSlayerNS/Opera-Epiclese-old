import Furina from '@/components/furina'
import { EnkaClient } from 'enka-network-api';

// Change the directory to store cache data.
// Default directory is node_modules/enka-network-api/cache.
const enka = new EnkaClient({ showFetchCacheLog: false, defaultLanguage: "en" });
enka.cachedAssetsManager.cacheDirectoryPath = "./cache";
enka.cachedAssetsManager.cacheDirectorySetup();
// enka.cachedAssetsManager.fetchAllContents();

const characters = enka.getAllCharacters();
// print character names in language "en"
// console.log(characters.map((c: any) => c.name.get("en")));



export default function User({ params }: any) {
    const user = params.user;

    const renderCharaList = (): any => {
        return characters.map((c: any) => {
            return <p key={c.name}>{c.name.get()}</p>
        })
    }

    const renderUserShowcase = (): any => {
        try {
            return enka.fetchUser(user).then((user: any) => {
                // console.log(user.charactersPreview[0].costume._nameId);
                return user.characters.map((char: any) => {
                    const name = char.characterData.name.get();
                    const level = char.level;
                    const maxLevel = char.maxLevel;
                    const statsList = char.stats.statProperties.map((stats: any) => {
                        return ` - ${stats.fightPropName.get()}: ${stats.valueText}`;
                    });
                    const artifacts = char.artifacts;

                    // return <p key={name}>
                    //     {name} - Lv.{level}/{maxLevel}{statsList.map((c: any) => {
                    //         return <><br key={c} />{c}</>
                    //     })}
                    // </p>

                    return <p key={name}>
                        {name} - Lv.{level}/{maxLevel}{artifacts.map((arti: any) => {
                            return <><br key={arti.mainstat} />{arti.mainstat.getMultipliedValue()}</>
                        })}
                    </p>
                })
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <Furina />
                <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
                {enka.fetchUser(user).then((user: any) => {
                    return <h1 className="text-5xl text-center">{user.nickname}</h1>
                })}
                </div>
            </div>

            <div className="mt-4 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-y-8 gap-x-4">
                {renderUserShowcase()}
            </div>
        </main>
    )
}
