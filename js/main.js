const steps = document.querySelectorAll('.step')
const bar = document.getElementById('bar')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')


let currentStep = 1

nextButton.addEventListener('click', ()=> {
    if(currentStep<steps.length){
        currentStep++
        updateProgress()
    }
})

prevButton.addEventListener('click', ()=> {
    if(currentStep>1){
        currentStep--
        updateProgress()
    }
    
})

function updateProgress(){
    steps.forEach((step,index)=>{
        if(index<currentStep){
            step.classList.add("active")
        }else{
            step.classList.remove("active")
        }
    })

    const progress = ((currentStep-1) / (steps.length-1))*100
    bar.style.width=progress+'%'

    if(currentStep==steps.length){
        nextButton.disabled=true;
    } else if(currentStep==1){
        prevButton.disabled=true
    } else{
        prevButton.disabled=nextButton.disabled=false
    }

}

