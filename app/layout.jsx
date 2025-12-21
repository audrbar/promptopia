import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

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
                <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
                <script src="https://files.bpcontent.cloud/2024/12/24/18/20241224183235-ZCDCRQNL.js"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.embeddedChatbotConfig = {
                            chatbotId: "g_bYLFccr_cD36Ukgq0tS",
                            domain: "www.chatbase.co"
                        }
                    `
                }} />
                <script
                    src="https://www.chatbase.co/embed.min.js"
                    chatbotId="g_bYLFccr_cD36Ukgq0tS"
                    domain="www.chatbase.co"
                    defer>
                </script>
            </body>
        </html>
    )
}

export default Rootlayout;
