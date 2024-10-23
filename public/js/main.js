import {Dataform, ChangeMenu, ChangeExam} from './functions.js';

document.addEventListener('DOMContentLoaded', () => {

    //Change the green color of the "Como desea buscar examenes menu".
    const exaMenu = document.querySelector('.exa-menu');
    exaMenu.addEventListener('click', (e) => {
        ChangeMenu(e, exaMenu)
        ChangeExam(e)
    })

    //Submit DataForm data 
    document.getElementById('dataForm').addEventListener('submit', (e) => {
        Dataform(e)
    })

    //Codigo para buscar Examenes

})

