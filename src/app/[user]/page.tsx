import Furina from '@/components/furina'
import { EnkaClient } from 'enka-network-api';

const enka = new EnkaClient({ showFetchCacheLog: true, defaultLanguage: "en" });
const characters = enka.getAllCharacters();
// print character names in language "en"
// console.log(characters.map((c: any) => c.name.get("en")));

const renderChara = () => {
    return characters.map((c: any) => {
        <p>hello {c.name.get("en")}</p>
    })
}

// try {
//     enka.fetchUser(600169846).then((user: any) => {
//         // console.log(user.characters);
//     });
// } catch (error) {
//     console.log(error);
// }

export default function User({ params }: any) {
    // const enka = searchParams.db;

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <Furina />
                <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
                    <h1 className="text-5xl text-center">{'username'}</h1>
                </div>
            </div>

            <div className="mt-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <p>{params.user}</p>
                {renderChara()}
            </div>
        </main>
    )
}
