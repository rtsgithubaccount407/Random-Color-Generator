
       const getColor = ()=>{
        const randomNumber = Math.floor(Math.random()*16777215);
       
        const randomColor = '#' + randomNumber.toString(16);
        document.body.style.backgroundColor = randomColor;
        document.getElementById('textcode').innerText = randomColor;
        // automatic copy text
        navigator.clipboard.writeText(randomColor);

       }
       document.getElementById('clickbtn').addEventListener('click',getColor)
       getColor()
