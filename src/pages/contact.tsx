import Layout from "@/components/template/Layout";

const contact = () => {
    return (
        <Layout title="Contact Format">
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">Get in touch</h2>
                        <p className="mx-auto max-w-screen-md text-center md:text-lg">
                            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
                        </p>
                    </div>

                    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 inline-block text-sm sm:text-base">First name*</label>
                            <input className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div>
                            <label className="mb-2 inline-block text-sm sm:text-base">Last name*</label>
                            <input className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-2 inline-block text-sm sm:text-base">Company</label>
                            <input className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-2 inline-block text-sm sm:text-base">Email*</label>
                            <input className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-2 inline-block text-sm sm:text-base">Subject*</label>
                            <input className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-2 inline-block text-sm sm:text-base">Message*</label>
                            <textarea className="h-64 w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                        </div>

                        <div className="flex items-center justify-between sm:col-span-2">
                            <button className="rounded-lg px-8 py-3 text-center bg-secondaryGreen font-semibold text-white border-2 border-secondaryGreen 
                                             hover:bg-white hover:text-secondaryGreen">Send</button>
                            <span className="text-sm text-grayishBlue">*Required</span>
                        </div>
                    </form>
                </div>
                </div>
        </Layout>
    );
}

export default contact;