const toggleBtn = document.getElementById("toggle-about");
        const sections =  [document.getElementById("about"),document.getElementById("contact")];
        let isShown = false;

        toggleBtn.addEventListener("click", function (e) {
            e.preventDefault;
            isShown = !isShown;

            if(isShown){
                sections.forEach((section,index)=>{
                    setTimeout(()=>{
                        section.classList.remove("hidden");
                        section.classList.add("show");
                    }, index*500);
                });
                toggleBtn.textContent= "Hide Information";
            }else{
                sections.forEach((section)=>{
                    section.classList.remove("show");
                    setTimeout(()=>{
                        section.classList.add("hidden");
                    },400);
                });
                toggleBtn.textContent="Show again!";
            }
        });