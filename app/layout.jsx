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
            <head>
                <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
                <script src="https://files.bpcontent.cloud/2024/12/24/18/20241224183235-ZCDCRQNL.js"></script>
            </head>
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
            </body>
        </html>
    )
}

export default Rootlayout;
