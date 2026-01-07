export default function HomeCheckerDash() {
    return (
        <main>
            <h1>Aktivität</h1>

                {/* Filter + Sort bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                    <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                        Alle
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                        Vorkontrollen
                    </button>
                     <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                        Nachkontrollen
                    </button>
                    </div>
                </div>

                {/* Activities list */}

                <ul>
                    <li>
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                            <img src="" />
                            <div>
                                <p>Vorkontrolle gesucht</p>
                                <p>heute</p>
                            </div>
                            <div>
                                <span>Standort: 12051 Berlin</span>
                            </div>
                            <button className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-300 transition">Ansehen</button>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                            <img src="" />
                            <span>Nachkontrolle gesucht</span>
                            <span>Standort: 12051 Berlin</span>
                            <button className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-300 transition">Ansehen</button>
                        </div>
                    </li>
                </ul>
        </main>
    )
}