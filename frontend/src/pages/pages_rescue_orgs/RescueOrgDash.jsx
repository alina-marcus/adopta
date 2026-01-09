export default function RescueOrgDash() {
    return (
        <>
            <h1>Activity</h1>

            <div className="flex flex-wrap gap-2">
                <Button pill>Alle</Button>
                <Button pill>Applications</Button>
                <Button pill>Pre-Checks</Button>
                <Button pill>Post-Checks</Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
                {/* Left: image */}
                <div className="flex items-center gap-4">
                    <img
                    src="/path/to/pip.jpg"
                    alt="Pip"
                    className="w-12 h-12 rounded-full object-cover"
                    />

                    {/* Middle: text */}
                    <div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <p className="font-semibold text-black">New Application</p>
                            <p>today</p>
                        </div>
                        <p className="text-gray-800 text-sm">Pip has a new application!</p>
                    </div>
                </div>
                {/* Right: button */}
                <Button>Review</Button>
            </div>
            <Footer />
        </>
  );
}