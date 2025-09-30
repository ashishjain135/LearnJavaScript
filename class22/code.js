const colorPalette = document.getElementById('colorPalette');

colorPalette.addEventListener("click",function(event){
    const clickElement = event.target;
    if(clickElement.classList.contains('color-box')){
        let color = clickElement.style.backgroundColor;

        // console.log(`clicked on color ${color}`)
        color = color.replace('rgb','rgba').replace(')',', 0.2)');
        document.body.style.backgroundColor = color;
    }
})