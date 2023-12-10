// Function to display facebook-text

const displayFacebookText = () => {

    const facebookLink = document.querySelector('#facebook-link')
    const facebookText = document.querySelector('#facebook')

    const addFacebookText = () => {

        facebookText.classList.toggle('display')
    }

    facebookLink.addEventListener('mouseover', addFacebookText)
    facebookLink.addEventListener('mouseout', addFacebookText)

}

displayFacebookText ()

// Function to display instagram-text

const displayInstagramText = () => {

    const instagramLink = document.querySelector('#instagram-link')
    const instagramText = document.querySelector('#instagram')

    const addInstagramText = () => {

        instagramText.classList.toggle('display')
    }

    instagramLink.addEventListener('mouseover', addInstagramText)
    instagramLink.addEventListener('mouseout', addInstagramText)

}

displayInstagramText ()

// Function to display pinterest-text

const displayPinterestText = () => {

    const pinterestLink = document.querySelector('#pinterest-link')
    const pinterestText = document.querySelector('#pinterest')

    const addPinterestText = () => {

        pinterestText.classList.toggle('display')
    }

    pinterestLink.addEventListener('mouseover', addPinterestText)
    pinterestLink.addEventListener('mouseout', addPinterestText)

}

displayPinterestText ()