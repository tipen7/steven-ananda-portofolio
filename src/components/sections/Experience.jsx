import { Animation } from "../Animation";
export const Experience = () => {

    return(
        <section
        id="experience"
        className="min-h-screen flex items-center justify-center py-20">

            <Animation>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Experience</h2>
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 
flex flex-col items-center justify-center text-justify space-y-5 min-h-[250px] transition-all duration-300">
                        <h3> This is my First Project</h3>
                        <p>
                            Saya tidak pernah membuat proyek besar seperti website, aplikasi, dan apapun itu melibatkan
                            frontend skills atau backend skills karena keterbatasan ilmu saya tentang pemrograman.
                            Website ini adalah website pertama saya bermodalkan video Youtube, namun saya sangat ingin untuk lebih improve setiap harinya.
                        </p>

                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 
flex flex-col items-center justify-center text-justify space-y-5 min-h-[250px] transition-all duration-300">
                        <h3> SOON AND MORE PROJECTS TO COME!!!</h3>
                    
                    </div>
                </div>
            </div>
            </Animation>
        </section>
    );
        
};