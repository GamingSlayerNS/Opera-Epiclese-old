import Image from 'next/image'

function damageCalc() {
    const attackStat: number = 0;
    const skill: number = 0;
    const flatDmg: number = 0;
    const elementalDmg: number = 0;
    const bonusDmg: number = 0;
    const characterLevel: number = 90;
    const enemyLevel: number = 100;
    const defenseDown: number = 0;
    const enemyResist: number = 0;

    var damage = (attackStat * skill + flatDmg) * 
                    (1 + elementalDmg + bonusDmg) * 
                    ((characterLevel + 100) / 
                    ((enemyLevel + 100) * (1 - defenseDown) + (characterLevel + 100))) * 
                    (1 - enemyResist);
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
                <h1 className="text-5xl text-center">Damage Calculator</h1>
            </div>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/Genshin-Impact-Furina-materials,-kit,-and-Constellations-cover.webp"
                    alt="Next.js Logo"
                    width={1600/2}
                    height={900/2}
                    priority
                />
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <p>calc here</p>
            </div>
        </main>
    )
}
