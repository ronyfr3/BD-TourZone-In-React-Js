import React from 'react'
import ForkMeOnGithub from 'fork-me-on-github';

const ForkMeOnGithubRepo = () => {
    return (
       <div>
           <ForkMeOnGithub
                repo="https://github.com/ronyfr3"
                colorOctocat="black"
                colorBackground="#bada55"
                side="left"
                text="Fork Me On Github"
                isPride
                />
       </div>
    )
}

export default ForkMeOnGithubRepo
