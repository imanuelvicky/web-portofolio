import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#0d1b2a] text-gray-300 py-10">
            {/* <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-lg text-teal-400 font-semibold mb-4">About Me</h4>
                        <p className="text-sm leading-relaxed">
                            {`Hi! I'm a passionate web developer dedicated to crafting beautiful and functional websites. Let's connect!`}
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-lg text-teal-400 font-semibold mb-4">Contact</h4>
                        <p className="text-sm">Email: myemail@example.com</p>
                        <p className="text-sm">Phone: +123 456 7890</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg text-teal-400 font-semibold mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white">LinkedIn</a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white">GitHub</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white">Twitter</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Imanuel Vicky Sanjaya. All Rights Reserved.</p>
            </div> */}
            <p className="text-sm text-center">&copy; {new Date().getFullYear()} Imanuel Vicky Sanjaya. All Rights Reserved.</p>
        </footer>
    );
}
