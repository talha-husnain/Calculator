(
    function(){
        let upper = document.querySelector('.in');
        let buttons = document.querySelectorAll('.button');
        let level = document.querySelector('.equal');
        let cancel = document.querySelector('.can');

        buttons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                let value = e.target.dataset.num;
                upper.value += value;
            })
        });
        level.addEventListener('click', function(e) {
            if (upper.value ===""){
                upper.value = "please enter a value";
            }else{
               let ans =  eval(upper.value);
               upper.value= ans;
            }
        })
        cancel.addEventListener("click", function(e){
            upper.value= " ";

        })

    })();