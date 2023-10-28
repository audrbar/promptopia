import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                    AI-Powered Prompts
                </span>
            </h1>
            <p className="desc text-center">
                Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts, witch can be used on <a href="https://chat.openai.com/auth/login" target="_blank" className="cursor-pointer text-blue-600 visited:text-purple-600 target:shadow-lg">ChatGPT</a>
            </p>
            <Feed />
        </section>
    )
}

export default Home;
