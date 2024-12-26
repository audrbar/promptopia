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
            <Head>
                <Script type="text/javascript"
                    (function(d, t) {var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                    window.voiceflow.chat.load({
                        verify: { projectID: '65f6f0b6558bed48960bee3c' },
                        url: 'https://general-runtime.voiceflow.com',
                        versionID: 'production'
                    });}
                        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);})(document, 'script');
                />
            </Head>
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
