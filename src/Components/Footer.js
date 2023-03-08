const Footer = () => {

return (
    <div className='footer'>
        <div>
            <p>Website created by Manuel Winkler</p>
        </div>
        <div className='contactLinks'>
            <a href='https://github.com/SwissCheese15' target="_blank" title='GitHub'>
                <img src='images/gitHub.png'/>
            </a>
            <a href='https://job-finding-universe.vercel.app' target="_blank" title="universe">
                <img src='images/rocket.png'/>
            </a>
            <a href='https://linkedin.com/in/manuel-winkler-software-developer' target="_blank" title="linkedin">
                <img src='images/linkedin.png'/>
            </a>
            <a href='mailto:manuelwinkler@bluewin.ch' target="_blank" title='e-mail'>
                <img src='images/email.png'/>
            </a>
        </div>
    </div>
)

}

export default Footer