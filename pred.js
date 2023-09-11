const url = "https://api.genderize.io?name="
const wrapper = document.getElementById('wrapper')
const predictGender = () => {
    let name = document.getElementById('name').value
    let error = document.getElementById('error')
    let finalURL = url + name
    console.log(name)
    console.log(finalURL)
    wrapper.innerHTML = ""

    // check if input field is not empty and the entered name does not contain anything but alphabets.
    if(name.length > 0 && /^[A-Z-a-z]+$/.test(name)) {
        fetch(finalURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let div = document.createElement('div')
            div.setAttribute('id', 'info')
            div.innerHTML = `<h2 id="result-name">${data.name} </h2><img src="" id="gender-icon"/>
            <h1 id="gender">${data.gender}</h1>
            <h4 id="prob">Probability: ${data.probability}</h4>
            `
            wrapper.append(div)
            if(data.gender == "female") {
                div.classList.add("female")
                document.getElementById('gender-icon').setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRjFvTYIq-N5CzrnCnZ7Nfi5xEzafakUfFg4PrTDRZEA9roxCL_d_Fx5nxXCBb4DGX78&usqp=CAU")

            
            } else {
                div.classList.add("male")
                document.getElementById('gender-icon').setAttribute("src", "https://static.thenounproject.com/png/3110005-200.png")

            }
        })
                document.getElementById('name').value = ""
    }  else {
        error.innerHTML = "Enter a valid name with no spaces";
    }
}

document.getElementById('submit').addEventListener('click', predictGender)

window.addEventListener('load', predictGender)