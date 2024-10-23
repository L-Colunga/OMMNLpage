export async function Dataform(e) {
    e.preventDefault(); // Prevent form from submitting traditionally

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    try {
        // Make asynchronous request to the server using Fetch API
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text(); // Get the response from the server

        // Display the result on the same page
        document.getElementById('resultMessage').innerHTML = `<p>${result}</p>`;

        //Erase the submit button
        document.getElementById('footer-form-btn').classList.toggle('disappear')
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultMessage').innerHTML = '<p>Failed to submit data.</p>';
    }
}

export function ChangeMenu(e, exaMenu, groupHeader) {
    console.log(groupHeader);
    if (!groupHeader) return;
    if (!groupHeader.classList.contains('active')) {
        groupHeader.classList.add('active');
    }
    const otherGroups = exaMenu.querySelectorAll('li');
    otherGroups.forEach((otherGroup) => { 
        if (otherGroup !== groupHeader) {
            otherGroup.classList.remove('active');
        }
    });
}

export async function ChangeExam(e, groupHeader) {
    const formData = {
        change: groupHeader.value,
    };
    try {
        // Make asynchronous request to the server using Fetch API
        const response = await fetch('/exam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text(); // Get the response from the server
        console.log(result)
        // Display the result on the same page
        /*
        document.getElementById('resultMessage').innerHTML = `<p>${result}</p>`;

        //Erase the submit button
        document.getElementById('footer-form-btn').classList.toggle('disappear')
        */

    } catch (error) {
        console.error('Error:', error);
    }
}