const sections =document.querySelectorAll('section')
for(const section of sections){
    section.style.border ='2px solid red'
    section.style.margin='10px'
    section.style.borderRadius= '15px'
    section.style.backgroundColor= 'yellow' 
}

const placesContainer= document.getElementById('places-container')
placesContainer.classList.add('yellow-bg')
placesContainer.classList.remove('fontSize')

 