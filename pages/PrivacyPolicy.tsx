const PrivacyPolicy = () => {
    return (
        <section id="privacy-policy" className="bg-secondary py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-primary lg:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Amberprint Studio
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Effective Date: February 1, 2026
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="mb-12 text-center">
                        <p className="text-lg leading-relaxed text-foreground">
                            Amberprint Studio ("we," "our," or "us") operates the website{" "}
                            <span className="font-medium">amberprintstudio.com</span>. This Privacy Policy
                            explains how we collect, use, and protect your information when you visit our
                            website or contact us.
                        </p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 1 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            1. Information We Collect
                        </h2>
                        <p className="mb-4 leading-relaxed text-foreground">
                            We may collect the following information:
                        </p>

                        <div className="mb-6">
                            <h3 className="mb-3 text-xl font-medium text-primary">a) Contact Information</h3>
                            <ul className="ml-6 list-disc space-y-2 text-foreground">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Company / Organization</li>
                                <li>Message content</li>
                            </ul>
                            <p className="mt-3 text-sm italic text-muted-foreground">
                                Submitted voluntarily via our contact form.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="mb-3 text-xl font-medium text-primary">b) Technical Data</h3>
                            <ul className="ml-6 list-disc space-y-2 text-foreground">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device type</li>
                                <li>Pages visited</li>
                            </ul>
                            <p className="mt-3 text-sm italic text-muted-foreground">
                                Collected via standard analytics and security tools.
                            </p>
                        </div>

                        <p className="leading-relaxed text-foreground">
                            We may also use cookies or similar technologies to improve website functionality
                            and analyze traffic. You may disable cookies through your browser settings.
                        </p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 2 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            2. How We Use Your Information
                        </h2>
                        <p className="mb-4 leading-relaxed text-foreground">
                            We use collected data to:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-foreground">
                            <li>Respond to inquiries and project requests</li>
                            <li>Provide quotes or collaboration details</li>
                            <li>Improve our website and services</li>
                            <li>Maintain security and prevent spam</li>
                        </ul>
                        <p className="mt-6 font-medium text-primary">We do not sell personal data.</p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 3 */}
                    <div className="mb-12">
                        <h2 className="mb-6   text-2xl font-semibold text-primary lg:text-3xl">
                            3. Email Communications
                        </h2>
                        <p className="mb-3 leading-relaxed text-foreground">
                            If you contact us, we may reply via email.
                        </p>
                        <p className="leading-relaxed text-foreground">
                            We do not send marketing emails unless explicitly requested.
                        </p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 4 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            4. Third-Party Services
                        </h2>
                        <p className="mb-4 leading-relaxed text-foreground">
                            We may use secure providers for:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-foreground">
                            <li>Website hosting (e.g., Vercel)</li>
                            <li>Email delivery services</li>
                            <li>Analytics tools</li>
                        </ul>
                        <p className="mt-6 leading-relaxed text-foreground">
                            These providers process data solely to deliver their services on our behalf.
                        </p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 5 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            5. Data Retention
                        </h2>
                        <p className="mb-4 leading-relaxed text-foreground">
                            We retain inquiry data only as long as necessary to:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-foreground">
                            <li>Respond to requests</li>
                            <li>Maintain business records</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 6 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            6. Your Privacy Rights
                        </h2>
                        <p className="mb-4 leading-relaxed text-foreground">
                            Depending on your location, you may have the right to:
                        </p>
                        <ul className="ml-6 list-disc space-y-2 text-foreground">
                            <li>Request access to your data</li>
                            <li>Request deletion</li>
                            <li>Request correction</li>
                        </ul>
                        <p className="mt-6 leading-relaxed text-foreground">
                            To exercise these rights, contact us at:{" "}
                            <a
                                href="mailto:contact@amberprintstudio.com"
                                className="font-medium text-primary underline hover:text-primary/80"
                            >
                                contact@amberprintstudio.com
                            </a>
                        </p>
                        <p className="mt-6 text-sm italic text-muted-foreground">
                            International users acknowledge that their information may be processed in the
                            United States.
                        </p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 7 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            7. Security
                        </h2>
                        <p className="leading-relaxed text-foreground">
                            Amberprint Studio implements reasonable safeguards to protect your data, including
                            secure transmission and controlled access to stored information.
                        </p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 8 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            8. Children's Privacy
                        </h2>
                        <p className="leading-relaxed text-foreground">
                            Our website is not directed to individuals under the age of 13. We do not knowingly
                            collect personal information from minors.
                        </p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 9 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            9. Updates to This Policy
                        </h2>
                        <p className="leading-relaxed text-foreground">
                            We may update this Privacy Policy periodically. Changes will be posted on this page
                            with a revised effective date.
                        </p>
                    </div>

                    <hr className="my-12 border-border" />

                    {/* Section 10 */}
                    <div className="mb-12">
                        <h2 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">
                            10. Contact
                        </h2>
                        <div className="space-y-2 text-foreground">
                            <p className="font-medium">Amberprint Studio</p>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:contact@amberprintstudio.com"
                                    className="text-primary underline hover:text-primary/80"
                                >
                                    contact@amberprintstudio.com
                                </a>
                            </p>
                            <p>
                                Website:{" "}
                                <a
                                    href="https://amberprintstudio.com"
                                    className="text-primary underline hover:text-primary/80"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    amberprintstudio.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;