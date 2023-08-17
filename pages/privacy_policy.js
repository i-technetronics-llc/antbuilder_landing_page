import React from 'react';
import Container from '../components/container';
import HeaderContentSection from '../components/HeaderContent';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Logo from '../components/Logo';

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Antbuilder | Privacy</title>
                <meta
                    name="description"
                    content="Antbuilder privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='max-w-6xl mx-auto'>
                <Navbar />
            </div>


            <div className="space-y-16 my-10 w-full max-w-6xl mx-auto">
                <section className='space-y-2'>
                    <h1 className='text-5xl text-gray-700 dark:text-gray-200'>Privacy Policy</h1>
                    <p className='dark:text-gray-300'>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>
                </section>

                <HeaderContentSection header="Personal Information Collection">
                    <p className='dark:text-gray-300'>1. What personal information do we collect from the people that visit our blog, website or app?</p>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, credit card information or other details to help you with your experience.</li>
                    </ul>
                    <p className='dark:text-gray-300'>2. When do we collect information?</p>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>We collect information from you when you fill out a form or enter information on our site.</li>
                    </ul>
                </HeaderContentSection>

                <HeaderContentSection header="Use of Information">
                    <p className='dark:text-gray-300'>3. How do we use your information?</p>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                        <li>To improve our website to better serve you.</li>
                        <li>To quickly process your transactions.</li>
                        <li>To send periodic emails regarding your order or other products and services.</li>
                        <li>To allow us to better service you in responding to your customer service requests.</li>
                    </ul>
                </HeaderContentSection>

                <HeaderContentSection header="Information Security">
                    <p className='dark:text-gray-300'>4. How do we protect your information?</p>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.</li>
                        <li>We use regular Malware Scanning.</li>
                        <li>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</li>
                        <li>We implement a variety of security measures when a user places an order, enters, submits, or accesses their information to maintain the safety of your personal information.</li>
                        <li>All transactions are processed through a gateway provider and are not stored or processed on our servers.</li>
                    </ul>
                </HeaderContentSection>

                <HeaderContentSection header="Cookies">
                    <p className='dark:text-gray-300'>5. Do we use 'cookies'?</p>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. They help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</li>
                        <li>We use cookies to:</li>
                    </ul>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>Keep track of advertisements.</li>
                        <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future.</li>
                    </ul>
                    <p className='dark:text-gray-300'>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since the browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.<br />
                        If users disable cookies in their browser, some of the features that make your site experience more efficient may not function properly.</p>
                </HeaderContentSection>

                <HeaderContentSection header="Third-Party Disclosure">
                    <p className='dark:text-gray-300'>6. Third-party disclosure</p>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.</li>
                    </ul>
                </HeaderContentSection>

                <HeaderContentSection header="Third-Party Links">
                    <p className='dark:text-gray-300'>7. Third-party links</p>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>We do not include or offer third-party products or services on our website.</li>
                    </ul>
                </HeaderContentSection>

                <HeaderContentSection header="California Online Privacy Protection Act (CalOPPA)">
                    <div className='dark:text-gray-300 list-disc list-inside'>
                        <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</p>
                    </div>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li className='list-none font-medium'>According to CalOPPA, we agree to the following:</li>
                        <li>Users can visit our site anonymously.</li>
                        <li>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</li>
                        <li>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</li>
                        <li>You will be notified of any Privacy Policy changes on our Privacy Policy Page.</li>
                        <li>You can change your personal information by logging in to your account.</li>
                    </ul>
                </HeaderContentSection>

                <HeaderContentSection header="Children Online Privacy Protection Act (COPPA)">
                    <p className='dark:text-gray-300'>11. COPPA (Children Online Privacy Protection Act)</p>
                    <ul className='dark:text-gray-300 list-disc list-inside'>
                        <li>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</li>
                        <li>We do not specifically market to children under the age of 13 years old. We do not let third-parties, including ad networks or plug-ins, collect PII from children under 13.</li>
                    </ul>
                </HeaderContentSection>
            </div>

            <footer className="flex items-center justify-center py-4 bg-blue-500">
                <Logo className='!text-white' />
            </footer>
        </>
    );
}

export default PrivacyPolicy;
