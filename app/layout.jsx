import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Script from 'next/script';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

const Rootlayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
                <Script
                    src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
                    strategy="lazyOnload"
                />
                <Script
                    src="https://files.bpcontent.cloud/2024/12/24/18/20241224183235-ZCDCRQNL.js"
                    strategy="lazyOnload"
                />
                <Script id="chatbase-config" strategy="lazyOnload">
                    {`
                        window.embeddedChatbotConfig = {
                            chatbotId: "g_bYLFccr_cD36Ukgq0tS",
                            domain: "www.chatbase.co"
                        }
                    `}
                </Script>
                <Script
                    src="https://www.chatbase.co/embed.min.js"
                    strategy="lazyOnload"
                />
            </body>
        </html>
    )
}

export default Rootlayout;
