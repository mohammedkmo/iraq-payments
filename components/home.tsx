import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">

            <div className='w-full py-20 text-center md:px-40 dark:bg-black bg-slate-500 rounded-lg my-10 text-white  px-5'>
                <h1 className="text-4xl font-bold mb-4">Simplify Payment Gateway Integration in Iraq 🇮🇶</h1>
                <p className="text-xl  mb-8 text-center">
                    Welcome to the Iraqi Payment Gateway Developer Docs, your one-stop resource for simplifying payment gateway integration in Iraq. Whether you&rsquo;re a developer looking to integrate payment gateways into your application or a business seeking seamless payment solutions, we&rsquo;ve got you covered.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-full'>
                <div className="border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Streamline Your Integration Process</h2>
                    <p className="">
                        Integrating payment gateways can be complex and time-consuming, especially when dealing with specific regional requirements. Our mission is to simplify this process by providing comprehensive documentation, code samples, and guides tailored to the Iraqi market. We&rsquo;ve done the hard work of gathering all the necessary information and best practices, so you can focus on creating exceptional payment experiences for your users.
                    </p>
                </div>

                <div className="border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Comprehensive Documentation for Iraqi Payment Gateways</h2>
                    <p className="">
                        Our documentation covers a wide range of payment gateways prominent in Iraq, including ZainCash, AsiaPay, FastPay, Paytabs, and more. From understanding the basics to step-by-step integration instructions, our comprehensive guides will walk you through the process, ensuring a smooth integration experience. Say goodbye to the hassle of scouring multiple sources for information – everything you need is right here.
                    </p>
                </div>

                <div className="border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Collaborative Community</h2>
                    <p className="">
                        We believe in the power of collaboration and community-driven development. The Iraqi Payment Gateway Developer Docs is an open-source project, and we welcome contributions from developers like you. Share your expertise, suggest improvements, or even add support for new payment gateways. Together, we can enhance the documentation and create a robust resource for everyone.
                    </p>
                </div>

                <div className="border rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Get Started Today!</h2>
                    <p className="">
                        Ready to simplify payment gateway integration in Iraq? Start by exploring our documentation and finding the gateway that suits your needs. Whether you&rsquo;re a seasoned developer or just starting out, our guides will provide the guidance you need to succeed. If you have any questions or need assistance, our dedicated support team is here to help.
                    </p>
                </div>
            </div>

            <p className="text-center mt-10 text-sm">
                Join us on this journey of revolutionizing payment solutions in Iraq. Together, we can empower businesses and developers to offer secure, convenient, and seamless payment
                experiences for everyone.
            </p>
        </div>
    );
}

export default Home;