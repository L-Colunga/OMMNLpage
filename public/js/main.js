import {Dataform, ChangeMenu, ChangeExam} from './functions.js';

document.addEventListener('DOMContentLoaded', () => {

    //Change the green color of the "Como desea buscar examenes menu".
    const exaMenu = document.querySelector('.exa-menu');
    exaMenu.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('li');
        ChangeMenu(e, exaMenu, groupHeader)
        ChangeExam(e, groupHeader)
    })

    //Submit DataForm data 
    document.getElementById('dataForm').addEventListener('submit', (e) => {
        Dataform(e)
    })

    //Codigo para buscar Examenes

})

