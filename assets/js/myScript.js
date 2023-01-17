const root = document.getElementById('root')

function mainPageContent() {
    const renderMainPageContent =
        `
        <div class="container">
            <header class="header">Log In or Sign Up to vote</header>
            <h1 class="h1">What is more tasty?</h1>
            <div class="fieldWrapper">
                <fieldset class="fieldset">
                    <legend>Select your option</legend>
                    <div>
                        <input type="radio" id="apples" name="vote" value="apples"
                                checked>
                        <label for="apples">Apples</label>
                    </div>
                    <div>
                        <input type="radio" id="oranges" name="vote" value="oranges">
                        <label for="oranges">Oranges</label>
                    </div>
                </fieldset>
            </div>
        </div>
        <div class="buttonWrapperDiv">
            <button id="button">Click To See Total Results</button>
        </div>
        <div id="resultsWrapperDiv">
            <div class="finalResult">Results Are Shown Here</div>
            <div id="apples">Apples 43%</div>
            <div id="oranges">Oranges 57%</div>
        </div>
    `
    return renderMainPageContent
}

root.insertAdjacentHTML("afterend", mainPageContent())