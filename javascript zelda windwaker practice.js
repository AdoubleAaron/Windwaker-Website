// first we have to select all the bosses in our html and create ids 
// then we have to have an image appear when they are selected AND some text about them 

const gohma = document.querySelector('#gohma')
const kalle = document.querySelector('#kalle')
const gohdan = document.querySelector('#gohdan')
const helmaroc = document.querySelector('#helmaroc')
const jalhalla = document.querySelector('#jalhalla')
const molgera = document.querySelector('#molgera')
const puppet = document.querySelector('#puppet')
const ganondorf = document.querySelector('#ganondorf')

document.querySelector('#gohmaSelection').addEventListener('click', gohmaSelection)
document.querySelector('#kalleSelection').addEventListener('click', kalleSelection)
document.querySelector('#gohdanSelection').addEventListener('click', gohdanSelection)
document.querySelector('#helmarocSelection').addEventListener('click', helmarocSelection)
document.querySelector('#jalhallaSelection').addEventListener('click', jalhallaSelection)
document.querySelector('#molgeraSelection').addEventListener('click', molgeraSelection)
document.querySelector('#puppetSelection').addEventListener('click', puppetSelection)
document.querySelector('#ganondorfSelection').addEventListener('click', ganondorfSelection)

function gohmaSelection(){
	kalle.classList.add('hidden')
	gohdan.classList.add('hidden')
    helmaroc.classList.add('hidden')
    jalhalla.classList.add('hidden')
    molgera.classList.add('hidden')
    puppet.classList.add('hidden')
    ganondorf.classList.add('hidden')
	gohma.classList.toggle('hidden')
}

function kalleSelection(){
	gohma.classList.add('hidden')
	gohdan.classList.add('hidden')
    helmaroc.classList.add('hidden')
    jalhalla.classList.add('hidden')
    molgera.classList.add('hidden')
    puppet.classList.add('hidden')
    ganondorf.classList.add('hidden')
	kalle.classList.toggle('hidden')
}

function gohdanSelection(){
	gohma.classList.add('hidden')
	kalle.classList.add('hidden')
    helmaroc.classList.add('hidden')
    jalhalla.classList.add('hidden')
    molgera.classList.add('hidden')
    puppet.classList.add('hidden')
    ganondorf.classList.add('hidden')
	gohdan.classList.toggle('hidden')
}

function helmarocSelection(){
    gohma.classList.add('hidden')
	kalle.classList.add('hidden')
    gohdan.classList.add('hidden')
    jalhalla.classList.add('hidden')
    molgera.classList.add('hidden')
    puppet.classList.add('hidden')
    ganondorf.classList.add('hidden')
    helmaroc.classList.toggle('hidden')
}

function jalhallaSelection(){
    gohma.classList.add('hidden')
	kalle.classList.add('hidden')
    gohdan.classList.add('hidden')
    helmaroc.classList.add('hidden')
    molgera.classList.add('hidden')
    puppet.classList.add('hidden')
    ganondorf.classList.add('hidden')
    jalhalla.classList.toggle('hidden')
}

function molgeraSelection(){
    gohma.classList.add('hidden')
	kalle.classList.add('hidden')
    gohdan.classList.add('hidden')
    helmaroc.classList.add('hidden')
    puppet.classList.add('hidden')
    ganondorf.classList.add('hidden')
    jalhalla.classList.add('hidden')
    molgera.classList.toggle('hidden')
}

function puppetSelection(){
    gohma.classList.add('hidden')
	kalle.classList.add('hidden')
    gohdan.classList.add('hidden')
    helmaroc.classList.add('hidden')
    ganondorf.classList.add('hidden')
    jalhalla.classList.add('hidden')
    molgera.classList.add('hidden')
    puppet.classList.toggle('hidden')
}

function ganondorfSelection(){
    gohma.classList.add('hidden')
	kalle.classList.add('hidden')
    gohdan.classList.add('hidden')
    helmaroc.classList.add('hidden')
    jalhalla.classList.add('hidden')
    molgera.classList.add('hidden')
    puppet.classList.add('hidden')
    ganondorf.classList.toggle('hidden')
}