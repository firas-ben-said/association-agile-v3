export default function Footer() {
    return (
        <footer className="bg-zinc-800 text-white p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                <div className="space-y-4">
                    <h5 className="font-bold text-lg">Solutions</h5>
                    <ul className="space-y-2">
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h5 className="font-bold text-lg">Support</h5>
                    <ul className="space-y-2">
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>API Status</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h5 className="font-bold text-lg">Company</h5>
                    <ul className="space-y-2">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h5 className="font-bold text-lg">Legal</h5>
                    <ul className="space-y-2">
                        <li>Claim</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-2">
                    <h5 className="font-bold text-lg mb-4">Subscribe to our newsletter</h5>
                    <p className="mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex flex-wrap">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg flex-1 min-w-0" />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-zinc-700 mt-10 pt-5 text-center">
                <p>© 2020 Your Company, Inc. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-zinc-400 hover:text-white">Facebook</a>
                    <a href="#" className="text-zinc-400 hover:text-white">Instagram</a>
                    <a href="#" className="text-zinc-400 hover:text-white">Slack</a>
                    <a href="#" className="text-zinc-400 hover:text-white">Twitter</a>
                    <a href="#" className="text-zinc-400 hover:text-white">YouTube</a>
                </div>
            </div>
        </footer>

    )
}