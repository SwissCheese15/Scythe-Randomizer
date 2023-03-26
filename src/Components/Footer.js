const Footer = () => {

return (
    <div className='footer'>
        <div>
            <p>Website created by Manuel Winkler</p>
        </div>
        <div className='contactLinks'>
            <a
                href='https://github.com/SwissCheese15'
                target="_blank"
                rel="noreferrer"
                title='GitHub'
            >
                <img src='images/gitHub.png' alt="Github Logo" />
            </a>
            <a
                href='https://job-finding-universe.vercel.app'
                target="_blank"
                rel="noreferrer"
                title="universe"
            >
                <img src='images/rocket.png' alt="Rocket Symbol" />
            </a>
            <a
                href='https://linkedin.com/in/manuel-winkler-software-developer'
                target="_blank"
                rel="noreferrer"
                title="linkedin"
            >
                <img src='images/linkedin.png' alt="Linkedin Logo" />
            </a>
            <a
                href='mailto:manuelwinkler@bluewin.ch'
                target="_blank"
                rel="noreferrer"
                title='e-mail'
            >
                <img src='images/email.png' alt="Email Symbol" />
            </a>
        </div>
    </div>
)

}

export default Footer