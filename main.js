
const url = `https://api.github.com/users/`
// https://api.github.com/users/anthonygelder/repos


function createHTML(repoName, repoLink) {
    return `
        <div class="repo">
            <p class="repo-name">${repoName}</p>
            <a href="${repoLink}">Link</a>
        </div>
    `
}

function displayResults(responseData) {
    $('.results').empty();

    for(let i = 0; i < responseData.length; i++) {
        const name = responseData[i].name;
        const htmlUrl = responseData[i].html_url;

        createHTML(name, htmlUrl);

        $(".results").append(createHTML(name, htmlUrl));
    }
}

function getUrl(val, url) {
    const urlApi = `${url}${val}/repos`;
    // console.log(urlApi);
    getUser(urlApi);
    return urlApi;
}


function getUser(urlApi) {
    fetch(urlApi)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
}

function main() {
    $('.search').on('click', function() {
        event.preventDefault();
        const searctText = $('.githubUser').val();
        
        // console.log(searctText);
        $('.githubUser').val('');
        getUrl(searctText, url);
    })
}


$(main)