// create eventlistener for input save
document.querySelector(".saveButton").addEventListener("click", () => {
    const creator = document.querySelector("#lego__creator").value
    const creation = document.querySelector("#lego__creation").value
    const color = document.querySelector("#lego__color").selectedIndex
    const colorValue = document.querySelector("#lego__color")[color].textContent
    const shape = document.querySelector("#lego__shape").value

    // build data structure
    let legoToSave = {
        name: creator,
        creation_name: creation,
        creation_color: colorValue,
        creation_shape: shape
    }
    // fetch to post to local API
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    })
})